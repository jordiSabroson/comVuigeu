function convertirCF() {

    let CF = prompt("A què vols convertir C/F?");

    let temp = parseFloat(prompt("Temperatura:"));

<<<<<<< HEAD
    if( CF.toUpperCase() == "F" ){
=======
    if( CF.toUpperCase() == "C" ){
>>>>>>> d50f8174448273d5d656ac06cb4454ef0b50a034

        let cent = (temp-32)/(9/5);

        console.log(`${temp}F -> ${cent}C`);

<<<<<<< HEAD
    }else if (CF.toUpperCase() == "C"){
=======
    }else if (CF.toUpperCase() == "F"){
>>>>>>> d50f8174448273d5d656ac06cb4454ef0b50a034

        let fh = (9/5) * temp + 32;

        console.log(`${temp}C -> ${fh}F`);

    }else {

        console.log("Només es pot C ó F");
<<<<<<< HEAD
=======

    }
>>>>>>> d50f8174448273d5d656ac06cb4454ef0b50a034

    }
}
