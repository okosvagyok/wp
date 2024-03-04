call stack
	az utasítások nyomonkövetésére használja a JS
	LIFO: a legutóbb beérkezett kérés lesz leghamarabb feldolgozva
call stack a valóságban
	const multiply = (x,y)=> x*y; -- Multiply -> összeszoroz két számot
	const square = (x) => multiply(x,x) -- Square -> négyzetre emel egy számot
	const squareSum = (a,b) => square(a)+square(b); -- SquareSum -> visszatér a két szám négyzeteinek az összegével
	squareSum(2,3);
single thread
	egy szálon fut!
	egymás után lépésről lépésre hatja végre az utasításokat
	nagyon gyorsan végzi el és ezért nem lehet észre venni
	pl.
	console.log("Az alert előtti kód");
	alert("Ez az alert");
	console.log("Sikeresen bezártad az alertet");
async callback
	igazából a JS-et játszuk ki vele
	amikor egy feladatot nagyon sok idő végrehajtani, egyszerűen csak megkérjük a böngészőt, hogy végezze el és szóljon, ha készen van (API)
miért a böngésző?
	a böngésző a futási környezet
	a JS-sel nem csak a nyelvet használjuk, hanem megpróbáljuk kiaknázni a környezet adta lehetőségeket
setTimeout(), event listener
	a setTimeout() függvény segítségével késleltetést tudunk állítani a kód lefutása során
	a JS event listener egy olyan mechanizmus, amely lehetővé teszi, hogy a weboldal vagy alkalmazás JS kódja reagéljon különböző eseményekre, például kattintásra, billentyű lenyomásra, egérmozdulatra stb.
callback hell
	rendezett, de nagyon nehezen olvasható kód
	megoldás a Promise-ok
