const giaQuaDem = 200;
const gioVao = new Date('2022-04-06 13:00:00').getHours();
const gioRa = new Date('2022-04-07 11:00:00').getHours();
//output
function tinhTienPhong(gioVao, gioRa){
    if((gioVao+gioRa) <= 24){
        return total = 200;
    }else{
        return total = giaQuaDem + (((gioVao+gioRa) - 24)*30);
    }
}
console.log(tinhTienPhong(gioVao, gioRa));

// Test case 1
// TC1: total = 200k
// const gioVao = new Date('2022-04-06 13:00:00').getHours();
// const gioRa = new Date('2022-04-07 11:00:00').getHours();
 
// Test case 2
// TC1: total = 230k
// const gioVao = new Date('2022-04-06 13:00:00').getHours();
// const gioRa = new Date('2022-04-07 13:00:00').getHours();
 
// Test case 3
// TC1: total = 290k
// const gioVao = new Date('2022-04-06 13:00:00').getHours();
// const gioRa = new Date('2022-04-07 14:00:00').getHours();
 
// Test case 4
// TC1: total = 480k
// const gioVao = new Date('2022-04-06 13:00:00').getHours();
// const gioRa = new Date('2022-04-07 20:00:00').getHours();
 
// Test case 5
// TC1: total = 230k
// const gioVao = new Date('2022-04-06 10:00:00').getHours();
// const gioRa = new Date('2022-04-07 11:00:00').getHours();
 