import "./Shop.scss";

const string = "racecar";
const result = string.split("").reverse().join("");

let result2 = "";
let result3 = "";
if (string == result) {
  result2 = <p className="exer__sizer">палендром</p>;
} else {
  result3 = <p className="exer__sizer">не палендром</p>;
}


// 2 задача

const arr = [3, 1, -2,4,2,-9]

let max = 0
let min = 0
for(let i = 0; i<= arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }else if(min > arr[i]){
        min = arr[i]
    }else{
        min
    }
}
//  3 задание


const arr3 = [1,2,2,3,4,5,6,7]
let acc = 0
let resultZaeb = 0
for(let i = 0; i<arr3.length; i++){
    acc = arr3.lastIndexOf(arr3[i])
    if(arr3[i] !== acc){
        resultZaeb = arr3[i]
    }else{
        acc = arr3
    }
}


const Shop = () => {
  return (
    <section className="container">
      <div className="exer">задание хз как они называются примитывные что ли
        <p>1 задание</p>{result2}
        {result3}
        <p>2 задание</p><p className="exer__sizer">{max}, {min}</p>
        <p>3 задание</p><p className="exer__sizer">{resultZaeb}</p>
      </div>
    </section>
  );
};
export default Shop;
