// let promise = await fetch('https://jsonplaceholder.typicode.com/users')
// let data = []
// if (promise.ok) {
//     data = await promise.json()
// }
//
// console.log(data);

// let url = 'https://jsonplaceholdertypicode.com/users';
// fetch(url).catch((err) => fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//         console.log(err,'Это 2-ой запрос')
//         return res.json()
// }).then(r => console.log(r)))
//     .then((response) => response.json())
//     .then(response => console.log('1',response))
//     .catch(err => console.log(err))


// []

//      [1, 2, 3, 6] - true
//     [6, 3, 2, 1] - true
//     [5, 5] - true
//     [1, 2, 5, 5, 5, 8, 9] - true
//     [1, 2, 5, 5, 5, 2, 1] - false
//     [1, 10, 6] - false
//
//     [ 4, 4, 5, 6 ]
//     [ 4, 4, 3, 2 ]

// function fn(arr) {
//         let flag = null
//         let j = null
//         // for (let i = 0; i < arr.length; i++) {
//         //         if (flag === false) {
//         //                 break
//         //         }
//         //         if (arr[i] === arr[i + 1]) {
//         //                 continue
//         //         }
//         //         if (arr[i] < arr[i + 1]) {
//         //                for (let i = 0; i < arr.length - 1; i++) {
//         //                        if(arr[i] <= arr[i + 1]) {
//         //                                console.log('i,' ,i, flag);
//         //                                flag = true
//         //                        } else {
//         //                                flag = false
//         //                                break
//         //                        }
//         //                }
//         //         }
//         //         if (arr[i] > arr[i + 1]) {
//         //                 for (let i = 0; i < arr.length - 1; i++) {
//         //                         if(arr[i] >= arr[i + 1]) {
//         //                                 flag = true
//         //                         } else {
//         //                                 flag = false
//         //                                 break
//         //                         }
//         //                 }
//         //         }
//         //
//         //
//         // }
//         return flag
// }
// function funk(arr) {
//         let flag = 0
//         for(let i = 0; i < arr.length - 1; i++) {
//                 if (arr[i] === arr[i + 1]) {
//                        continue
//                 }
//                 if (arr[i] > arr[i + 1]) {
//                       if (flag === -1) {
//                               return false
//                       }
//                         flag = 1
//                 }
//                 if (arr[i] < arr[i + 1]) {
//                         if (flag === 1) {
//                                 return false
//                         }
//                         flag = -1
//                 }
//         }
//         return true
// }
//
// console.log('1 ', funk([1, 2, 3, 6]));
// console.log('2 ', funk([6, 3, 2, 1]));
// console.log('3 ', funk([5, 5]));
// console.log('4 ', funk([1, 2, 5, 5, 5, 8, 9]));
// console.log('5 ', funk([1, 2, 5, 5, 5, 2, 1]));
// console.log('6 ', funk([ 4, 4, 5, 6 ]));
// console.log('7 ', funk([ 4, 4, 3, 2 ]));
// console.log('8', funk([ 4, 4, 3, 5 ]));

// const arr = ['FizzBuzz', 'Fizz', 'Buzz']
// function fizzBuzz(n) {
//         // Write your code here
//         for (let i = 1; i<=n;i++) {
//                 if (i % 3 === 0 && i % 5 === 0) {
//                         console.log(i,'FizzBuzz')
//                 } else if (i % 3 === 0) {
//                         console.log(i,'Fizz')
//                 } else if (i % 5 === 0) {
//                         console.log(i,'Buzz');
//                 } else {
//                         console.log(i)
//                 }
//         }
// }
//
// fizzBuzz(15)


// function foo(arr) {
//         const [N, K, M] = arr
//         const details = Math.floor(N / K)
//         let wm = K * details
//         let ost = N - (K*details)
//         const res =[]
//          for (let i = 0; i <= (K * details); i++) {
//                  if (wm > M) {
//                          res.push(i)
//                          if(wm === M) {
//                                  res.push(i)
//                                  continue
//                          }
//                          wm-=M
//                          continue
//                  }
//                  console.log('wm',wm);
//                  ost += wm
//                  console.log(ost);
//                  break
//          }
//         if (ost >= K) {
//                 console.log('2oskao')
//                 wm=ost
//                 for (let i = 0; i < ost; i++) {
//                         if (wm >= M) {
//                                 wm-=M
//                                 res.push(i)
//                                 continue
//                         }
//                         ost+=wm
//                         break
//                 }
//         }
//         return res.length
// }



// const data = '200 3 2'
// const arr = data.toString().split(' ').map(Number)
// const res = foo(arr);
// console.log(res);

// const
//     name = ['ball', 'ball', 'bat', 'glove', 'glove', 'glove'],
//     price = [2,4,3,1,2,1], // цена
//     m=[2,4,5,1,1,1] // вес

// console.log(name[0], 'цена=',price[0],'вес=', m[0])
// console.log(name[1], 'цена=',price[1],'вес=', m[1])
// console.log(name[2], 'цена=',price[2],'вес=', m[2])
// console.log(name[3], 'цена=',price[3],'вес=', m[3])
// console.log(name[4], 'цена=',price[4],'вес=', m[4])


// const  groupByField = (arr) => arr.reduce((acc,item, index) => {
//         let obj = {[item]: index}
//         acc.push(obj)
//         return acc
// }, [])
//
//
// function duplicates(name, price, m) {
//         const obj = groupByField(name)
//
//         return obj.reduce((acc, item, i) => {
//                  let obj = {}
//                 for (let key in item) {
//                         if (item.hasOwnProperty(key)) {
//                                 obj[name[item[key]]] = [price[item[key]], m[item[key]]]
//                                 acc.push(obj)
//                                 return acc
//                         }
//                 }
//         }, [])
// }
//
// const res = duplicates(name, price, m)
//
// for (let i = 0; i < res.length; i++) {
//         Object.keys(res[i]).forEach(key => {
//                 res[i][key].reduce((a,b) => console.log(`${key}:`, a, b))
//         })
// }
// const sizerMax = (first, second, callback) => callback(Math.max(first, second));
// const count = (firs, second, callback) => callback(firs - second)
// function foo(n, count=0) {
//         let it = 0
//         if (count) {
//                 for (let i = 0; i<count; i++) {
//                         it = n - i
//                 }
//         }
//         return function fuc(n) {
//                 if (n === (it ? it : 1)  || n===0) {
//                         return n
//                 }
//                 return n *  fuc(n - 1)
//         }
//
//
// }
// let f1 = 64 // 13,12,11,10,9,8
// let cl = 8
// let f2 = f1 - cl
// let f3 = cl
//
// let fuc1 = foo(f1)(f1);
// let fuc2 = foo(f2)(f2);
// let fuc3 = foo(f3)(f3);
// console.log('fac-64',fuc1);
// console.log('fuc 64 - 8',fuc2);
// console.log('fuc-8', fuc3);
//
// let res = fuc1 / (fuc3 * fuc2)
// console.log('res=',res);


/**
 * Заполняет строковый шаблон template данными из объекта object
 *
 * @author		User Name
 * @version		v.1.0 (dd/mm/yyyy)
 * @param		{object} object
 * @param		{string} template
 * @return		{string}
 */

// class Api {
//         constructor({id, name, role, salary}) {
//                 this.id = id
//                 this.name = name
//                 this.role = role
//                 this.salary = salary
//                 this.baseUrl = '/api/items/'
//         }
//
//         get_api_path(template) {
//
//                 let result = template.split(this.baseUrl)
//                     .map(v => v.replaceAll('%', '')).filter(el => el !== '').reduce((acc, item) => {
//                             let field = this.baseUrl
//                             if (item === 'id/name') {
//                                     field += this.id + '/' + this.name.replace(' ' , `%${this.id}`)
//                                     acc.push(field)
//                             }
//                             if (item === 'id/role') {
//                                     field += this.id + '/' + this.role
//                                     acc.push(field)
//                             }
//                             if (item === 'id/salary') {
//                                     field += this.id + '/' + this.salary
//                                     acc.push(field)
//                             }
//                             return acc
//                     }, [])
//
//                 return result
//         }
// }
//
// let user =
//     {
//             id		: 20,
//             name	: 'John Dow',
//             role	: 'QA',
//             salary	: 100
//     };
//
// let api_path_templates = [
//     "/api/items/%id%/%name%",
//     "/api/items/%id%/%role%",
//     "/api/items/%id%/%salary%"
// ];
//
// let api = new Api(user);
//
// let api_paths = api_path_templates.map((api_path_template) => {
//         return api.get_api_path(api_path_template);
// }).flat();
//
// console.log(JSON.stringify(api_paths));




