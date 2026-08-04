(() => {
  const host = document.getElementById("index-work-graph");
  if (!host || typeof d3 === "undefined") return;

  const site = "https://hanjoonseok.com/";
  const displayName = name => {
    if (/[가-힣]/.test(name) || name.length <= 20) return name;

    const words = name.trim().split(/\s+/);
    let shortened = "";

    for (const word of words) {
      const candidate = shortened ? shortened + " " + word : word;
      if (candidate.length > 20) break;
      shortened = candidate;
    }

    return (shortened || name.slice(0, 20)).trim() + "...";
  };
  const data = {
    name: "Typography",
    children: [
      { name: "BOOK & EDITORIAL", children: [
        ["Atlas der Metaphysischen Pflanzen", "work-detail/atlas/29.html"],
        ["Cor!", "work-detail/cor/28.html"],
        ["Ein Bericht einer kurzen Reise", "work-detail/ein/25.html"],
        ["SOMA 2025", "work-detail/soma/24.html"],
        ["그림자 없는 예약석", "work-detail/shadow/22.html"],
        ["FluoBoy", "work-detail/fluoboy/21.html"],
        ["Roots Before a Thought", "work-detail/roots/20.html"],
        ["고가네초 FLIP", "work-detail/gokanecho/18.html"],
        ["Rip space", "work-detail/ripspace/14.html"],
        ["Rreum", "work-detail/Grab it, Take it, and Feel it/4.html"]
      ]},
      { name: "IDENTITY & TYPE", children: [
        ["Drei Stack", "work-detail/dreistack/27.html"],
        ["‘구’ 레터링", "work-detail/gou/23.html"],
        ["어느 간판공의 간판쓰기 연습", "work-detail/novice/8.html"],
        ["름(?)", "work-detail/reum/3.html"],
        ["인천 INCHEON", "work-detail/incheon/2.html"],
        ["개운", "work-detail/refresh/1.html"]
      ]},
      { name: "EXHIBITION & DIRECTION", children: [
        ["빛의 양피지 위에서", "work-detail/shipskin/26.html"],
        ["Unboxing New Printer", "work-detail/unboxing/13.html"],
        ["ENCORE!", "work-detail/encore/12.html"],
        ["Chris Hamamoto Partridge", "work-detail/chris/10.html"],
        ["Noël Leu", "work-detail/neol/9.html"]
      ]},
      { name: "RESEARCH & EXPERIMENT", children: [
        ["인공지능 과제 수행 프로젝트", "work-detail/designwithai/17.html"],
        ["온갖 흰 종이", "work-detail/100/16.html"],
        ["와플은 첩보다.", "work-detail/waffle/15.html"],
        ["Pastypography", "work-detail/pasta/11.html"],
        ["Joonseok thinks that, Joonseok says that", "work-detail/joonseokthinks/7.html"],
        ["I'm__ and I wear↓", "work-detail/iwear/6.html"],
        ["Itchy feet", "work-detail/itchy/5.html"],
        ["여백의 부피", "work-detail/volume/19.html"]
      ]}
    ].map(group => ({
      name: group.name,
      children: group.children.map(item => ({ name: item[0], href: item[1] }))
    }))
  };

  const svg = d3.select(host);
  const width = 1100;
  const radius = 360;
  svg.attr("viewBox", [-width / 2, -width / 2, width, width]);

  const root = d3.cluster().size([2 * Math.PI, radius])(
    d3.hierarchy(data).sort((a, b) => d3.ascending(a.data.name, b.data.name))
  );
  const radialLink = d3.linkRadial().angle(d => d.x).radius(d => d.y);
  const point = (angle, r) => {
    const a = angle - Math.PI / 2;
    return [Math.cos(a) * r, Math.sin(a) * r];
  };

  svg.append("circle").attr("class", "index-graph-guide").attr("r", radius);
  svg.append("circle").attr("class", "index-graph-guide").attr("r", radius / 2);

  const linkGroup = svg.append("g").attr("class", "index-graph-links");
  const links = linkGroup.selectAll("path")
    .data(root.links())
    .join("path")
    .attr("class", "index-graph-link")
    .attr("d", radialLink);

  const nodes = svg.append("g").selectAll("circle")
    .data(root.descendants())
    .join("circle")
    .attr("class", d => "index-graph-node" + (d.depth === 0 ? " root" : ""))
    .attr("cx", d => point(d.x, d.y)[0])
    .attr("cy", d => point(d.x, d.y)[1])
    .attr("r", d => d.depth === 0 ? 6 : d.children ? 4.5 : 3.2);

  svg.append("g").selectAll("text")
    .data(root.children)
    .join("text")
    .attr("class", "index-graph-branch")
    .attr("x", d => point(d.x, d.y - 22)[0])
    .attr("y", d => point(d.x, d.y - 22)[1])
    .attr("text-anchor", "middle")
    .text(d => displayName(d.data.name));

  const labelGroup = svg.append("g").attr("class", "index-graph-labels");
  const labels = labelGroup.selectAll("a")
    .data(root.leaves())
    .join("a")
    .attr("href", d => new URL(d.data.href, site).href)
    .attr("aria-label", d => d.data.name)
    .append("text")
    .attr("class", "index-graph-label")
    .attr("x", d => point(d.x, d.y + 13)[0])
    .attr("y", d => point(d.x, d.y + 13)[1])
    .attr("dy", ".32em")
    .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
    .attr("transform", d => {
      const p = point(d.x, d.y + 13);
      const base = "rotate(" + (d.x * 180 / Math.PI - 90) + "," + p[0] + "," + p[1] + ")";
      return d.x < Math.PI ? base : base + " rotate(180," + p[0] + "," + p[1] + ")";
    })
    .text(d => displayName(d.data.name));

  const center = svg.append("text")
    .attr("class", "index-graph-center")
    .attr("text-anchor", "middle")
    .attr("dy", ".32em")
    .text("Typography");

  function reset() {
    links.classed("active", false);
    nodes.classed("active", false);
    labels.classed("active", false);
    linkGroup.classed("has-active", false);
  }

  function activate(d) {
    const names = new Set(d.ancestors().map(node => node.data.name));
    links.classed("active", edge => names.has(edge.target.data.name));
    nodes.classed("active", node => names.has(node.data.name));
    labels.classed("active", node => node === d);
    linkGroup.classed("has-active", true);
  }

  labels.each(function(d) {
    const anchor = this.parentNode;
    anchor.addEventListener("mouseenter", () => activate(d));
    anchor.addEventListener("mouseleave", reset);
    anchor.addEventListener("focus", () => activate(d));
    anchor.addEventListener("blur", reset);
  });

  center.raise();
})();