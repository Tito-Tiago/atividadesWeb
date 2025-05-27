//Funções anônimas / arrow / seta:

(num1, num2) => {
    return num1 + num2
}

//forma comu de usar

const somarValores = (num1, num2) => {
    return num1 + num2
}

const mesmaCoisa = (num1, num2) => num1 + num2

//console.log(somarValores(3, 4)) 

//callback

function forEachPersonalizado(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr); // O callback é chamado imediatamente para cada elemento
  }
}

const numeros = [1, 2, 3];
forEachPersonalizado(numeros, function(numero) {
  console.log(numero * 2);
});


//promessas

const myPromise = new Promise(
    (resolve, reject) => {
        //com externa, pode retornar erro
        const num = 3;
        if (num % 2 == 0) resolve("OK: é par")
        else reject("NOK: é impar")
    }
)

function getApi(url) {
    //fiz algo
    return myPromise;
}

function clientApi() {
    getApi("http://fake.com")
    .then(
        (res) => {
            console.log(res)
        }
    )
    .catch(
        (error) => {
            console.log(error)            
        }
    )
    .finally(
        () => {
            console.log("finalizando recurso")            
        }
    )
}

clientApi();