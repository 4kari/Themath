function K_persegi_panjang() {
		var p=document.getElementById("Panjang")
		var l= document.getElementById("Lebar")
		if (p.value!="" && l.value!="") {
			var jumlah=2*(Number(p.value)+Number(l.value))
			document.getElementById("hasil").innerHTML="Hasil dari keliling persegi Panjang dengan panjang "+p.value+" dan lebar "+l.value+" adalah "+jumlah;
			document.getElementById("penjelasan").innerHTML="Rumus keliling persegi panjang adalah 2 x (panjang + lebar) karena panjangnya adalah "+p.value+" dan lebarnya adalah "+l.value+" maka 2 x ("+p.value+" + "+l.value+") sehingga hasilnya = "+jumlah;
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function K_persegi(){
	var s = document.getElementById("sisi")
	var hasil=""
	if (s.value !=""){
		var jumlah=4*Number(s.value)
		document.getElementById("hasil").innerHTML="Hasil dari keliling persegi dengan sisi "+s.value+" adalah "+jumlah;
		document.getElementById("Penjelasan").innerHTML="Rumus keliling persegi adalah 4 x sisi, jadi karena sisinya adalah "+s.value+" maka 4 x "+s.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
	}

function siku_siku(){
	var a = document.getElementById("alas")
	var b = document.getElementById("tinggi")
	var c = Math.sqrt((a.value**2)+(b.value**2))
	if (a.value!="" && b.value!=""){
		var jumlah = Number(a.value)+Number(b.value)+c
		document.getElementById("hasil").innerHTML="Hasil dari keliling segitiga siku-siku dengan alas "+a.value+" dan tinggi "+b.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus keliling segitiga siku-siku adalah alas + tinggi + sisi miring, karena alasnya adalah "+a.value+" tingginya adalah "+b.value+" dan sisi miringnya adalah "+c.value+" maka "+a.value+" + "+b.value+" + "+c+" = "+jumlah
	}
	else{
		document.getElementById("hasil").innerHTML="Harap isi kolom inputan"
	}
	return false
}

function sama_sisi(){
	var s = document.getElementById("sisi")
	var hasil=""
	if (s.value !=""){
		var jumlah=3*Number(s.value)
		document.getElementById("hasil").innerHTML="Hasil dari keliling segitiga sama sisi, dengan sisi "+s.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus keliling segitiga sama sisi adalah 3 x sisi, karena sisinya adalah "+s.value+" maka 3 x "+s.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function sama_kaki(){
	var t = document.getElementById("tinggi")
	var a = document.getElementById("alas")
	var s = Math.sqrt((a.value**2)+(t.value**2))
	var hasil=""
	if (t.value !="" && a.value!=""){
		var jumlah=(2*Number(s))+Number(a.value)
		document.getElementById("hasil").innerHTML="Hasil dari keliling segitiga sama kaki dengan sisi "+s+" dan alas "+a.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus keliling segitiga sama kaki adalah 2 x (sisi miring) + alas, karena sisinya adalah "+s+" dan alasnya adalah "+a.value+" maka 2 ("+s+") + "+a.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function L_persegi(){
	var s = document.getElementById("sisi")
	var hasil=""
	if (s.value!=""){ 
		jumlah= s.value*s.value
		document.getElementById("hasil").innerHTML="Hasil dari luas persegi dengan sisi "+s.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus luas persegi adalah sisi x sisi, karena sisinya adalah "+s.value+" maka "+s.value+" x "+s.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
	}

function L_persegi_panjang(){
	var p = document.getElementById("Panjang")
	var l=document.getElementById("Lebar")
	var hasil=""
	if (p.value!="" && l.value!=""){
		jumlah= p.value*l.value
		document.getElementById("hasil").innerHTML="Hasil dari luas persegi panjang dengan panjang "+p.value+" dan lebar "+l.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus luas persegi panjang adalah panjang x lebar, karena panjangnya adalah "+p.value+" dan lebarnya "+l.value+" maka "+p.value+" x "+l.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function L_siku_siku(){
	var a=document.getElementById("alas")
	var t=document.getElementById("tinggi")
	var hasil=""
	if (a.value!="" && t.value!=""){
		jumlah= (a.value*t.value)*0.5
		document.getElementById("hasil").innerHTML="Hasil dari luas segitiga siku-siku dengan alas "+a.value+" dan tinggi "+t.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus luas segitiga siku-siku adalah 1/2 x alas x tinggi, karena alasnya adalah "+a.value+" dan tingginya "+t.value+" maka 1/2 x "+a.value+" x "+t.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function L_sama_kaki(){
	var a=document.getElementById("alas")
	var t=document.getElementById("tinggi")
	var hasil=""
	if (a.value!="" && t.value!=""){
		jumlah= 2*((a.value*t.value)*0.5)
		document.getElementById("hasil").innerHTML="Hasil dari luas segitiga sama kaki dengan alas "+a.value+" dan tinggi "+t.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus luas segitiga sama kaki adalah 2 x (1/2 x alas x tinggi), karena alasnya adalah "+a.value+" dan tingginya "+t.value+" maka 2 x (1/2 x "+a.value+" x "+t.value+") = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function L_sama_sisi(){
	var t=document.getElementById("tinggi")
	var s=document.getElementById("sisi")
	var hasil=""
	if (s.value!="" && t.value!=""){
		jumlah= t.value*s.value
		document.getElementById("hasil").innerHTML="Hasil dari luas segitiga sama sisi dengan sisi "+s.value+" dan tinggi "+t.value+" adalah "+jumlah;
		document.getElementById("penjelasan").innerHTML="Rumus luas segitiga sama sisi adalah sisi x tinggi , karena sisinya adalah "+s.value+" dan tingginya "+t.value+" maka "+s.value+" x "+t.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function LP_kubus(){
	var r=document.getElementById("rusuk")
	var hasil=""
	if (r.value!="") {
		jumlah=6*r.value*r.value
		document.getElementById("hasil").innerHTML="Hasil dari luas permukaan kubus dengan rusuk "+r.value+" adalah "+jumlah
		document.getElementById("Penjelasan").innerHTML="Rumus luas permukaan kubus adalah 6 x rusuk x rusuk, karena rusuknya adalah "+r.value+" maka 6 x "+r.value+" x "+r.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}


function LP_balok(){
	var p=document.getElementById("panjang")
	var t =document.getElementById("tinggi")
	var l = document.getElementById("lebar")
	var hasil=""
	if (p.value!="" && t.value && l.value) {
		jumlah=(2*p.value*t.value)+(2*p.value*l.value)+(2*l.value*t.value)
		document.getElementById("hasil").innerHTML="Hasil dari luas permukaan balok dengan panjang "+p.value+" tinggi "+t.value+" dan lebar "+l.value+" adalah "+jumlah
		document.getElementById("penjelasan").innerHTML="Rumus luas permukaan balok adalah (2 x Panjang x Lebar) + (2 x Panjang x Tinggi) + (2 x Lebar x Tinggi), karena panjangnya "+p.value+" serta tingginya "+t.value+" dan lebarnya "+l.value+" maka (2 x "+p.value+" x "+l.value+") + (2 x "+p.value+" x "+t.value+") + (2 x "+l.value+" x "+t.value+") = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function LP_kerucut(){
	var r=document.getElementById("jari-jari")
	var t =document.getElementById("tinggi")
	var hasil=""
	if (r.value!="" && t.value) {
		var s= Math.sqrt((r.value**2)+(t.value**2))
		var phi=3.14
		jumlah=(phi*(r.value**2))+(phi*r.value*s)
		document.getElementById("hasil").innerHTML="Hasil dari luas permukaan kerucut dengan jari-jari "+r.value+" tinggi "+t.value+" dan sisi "+s+" adalah "+jumlah
		document.getElementById("penjelasan").innerHTML="Rumus luas permukaan kerucut adalah (phi x r x r)+(phi x r x s) jadi, (phi x "+r.value+" x "+r.value+") + (phi x "+r.value+" x "+s+")  = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function V_kubus(){
	var s=document.getElementById("rusuk")
	var hasil=""
	if (s.value!="") {
		jumlah=s.value**3
		document.getElementById("hasil").innerHTML="Hasil dari volume kubus dengan rusuk "+s.value+" adalah "+jumlah
		document.getElementById("Penjelasan").innerHTML="Rumus volume kubus adalah rusuk x rusuk x rusuk jadi, "+s.value+" x "+s.value+" x "+s.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function V_balok(){
	var p=document.getElementById("panjang")
	var l=document.getElementById("lebar")
	var t=document.getElementById("tinggi")
	var hasil=""
	if (p.value!="" && l.value!="" && t.value!="") {
		jumlah=p.value*l.value*t.value
		document.getElementById("hasil").innerHTML="Hasil dari volume balok dengan panjang "+p.value+", lebar "+l.value+", dan tinggi "+t.value+" adalah "+jumlah
		document.getElementById("penjelasan").innerHTML="Rumus volume balok adalah panjang x lebar x tinggi jadi, "+p.value+" x "+l.value+" x "+t.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;	
}

function V_kerucut(){
	var r=document.getElementById("jari-jari")
	var t=document.getElementById("tinggi")
	var hasil=""
	if (r.value!="" && t.value!="") {
		phi=3.14
		jumlah=(phi*r.value*r.value*t.value)/3
		document.getElementById("hasil").innerHTML="Hasil dari volume kerucut dengan jari-jari "+r.value+",dan tinggi "+t.value+" adalah "+jumlah
		document.getElementById("penjelasan").innerHTML="Rumus volume kerucut adalah  (1/3 x phi x r x r x t) jadi, 1/3 x phi x "+r.value+" x "+r.value+" x "+t.value+" = "+jumlah
		}
		else{
			document.getElementById("hasil").innerHTML="Harap isi kolom inputan";	
		}
		return false;
}

function cek(e){
	var hasil=""
	if ((e.keyCode!=13) && (e.keyCode < 48) || (e.keyCode >57) || (e.keyCode ==15)) {
		document.getElementById("hasil").innerHTML="Inputan harus berupa angka"
		return false
	    }
	  return true
}