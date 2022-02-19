function sortData(data) {
	const redata = {}
	for (key in data) {
		redata[data[key].pos] = data[key]
	}
	return redata
}

function generateTable(title, data) {
	let class_name = document.createElement("h3")
	class_name.id = "class_name"
	class_name.innerHTML = title
	document.getElementById("tabella_first_row").appendChild(class_name)
	let tabella_pontok = document.createElement("div")
	tabella_pontok.classList.add("tabella_pontok")
	tabella_pontok.innerHTML =
		"<h3>M</h3>"
		+ "<h3>GY</h3>"
		+ "<h3>D</h3>"
		+ "<h3>V</h3>"
		+ "<h3>LG</h3>"
		+ "<h3>KG</h3>"
		+ "<h3>GK</h3>"
		+ "<h3>P</h3>"
		+ "<h3>Forma</h3>"
	document.getElementById("tabella_first_row").appendChild(tabella_pontok)
	let tabella_card = document.getElementById("data_list")
	let fragment = document.createDocumentFragment()

	for (let key in data) {
		let tabella_sor = document.createElement("div")
		tabella_sor.className = "tabella_row"
		tabella_sor.id = "tabella_row_" + key
		tabella_sor.onclick = () => tabella_sor.classList.toggle("highlight")

		let tabella_klub_adatok = document.createElement("div");
		tabella_klub_adatok.className = "tabella_klub";

		let sorszam = document.createElement("p");
		sorszam.textContent = data[key].pos;
		tabella_klub_adatok.appendChild(sorszam);

		let team_name = document.createElement("p");
		team_name.innerHTML = data[key].image + data[key].name;
		tabella_klub_adatok.appendChild(team_name);

		tabella_sor.appendChild(tabella_klub_adatok);

		let tabella_pontok = document.createElement("div");
		tabella_pontok.className = "tabella_pontok";

		let played = document.createElement("p");
		played.textContent = data[key].p;
		tabella_pontok.appendChild(played);

		let w = document.createElement("p");
		w.textContent = data[key].w;
		tabella_pontok.appendChild(w);

		let d = document.createElement("p");
		d.textContent = data[key].d;
		tabella_pontok.appendChild(d);

		let l = document.createElement("p");
		l.textContent = data[key].l;
		tabella_pontok.appendChild(l);

		let pf = document.createElement("p");
		pf.textContent = data[key].f;
		tabella_pontok.appendChild(pf);

		let pa = document.createElement("p");
		pa.textContent = data[key].a;
		tabella_pontok.appendChild(pa);

		let gd = document.createElement("p");
		gd.textContent = data[key].gd;
		tabella_pontok.appendChild(gd);

		let pts = document.createElement("p");
		pts.textContent = data[key].pts;
		tabella_pontok.appendChild(pts);

		let forma = document.createElement("p");
		forma.innerHTML = data[key].forma;
		tabella_pontok.appendChild(forma);

		tabella_sor.appendChild(tabella_pontok);

		fragment.appendChild(tabella_sor);
	}

	tabella_card.appendChild(fragment);

	document.getElementById("tabella_first_row").style.boxShadow =
		"10px 10px 0px #00DBFF";
}