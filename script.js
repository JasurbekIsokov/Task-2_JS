// # 11. Exercise - 2

// Topshiriq: Juft va toq sonlarni aniqlaydigan dastur tuzing! If / else dan foydalanib.
// Prompt orqali userdan raqamni oling va uni Juft yoki toqligini tekshiring.

// Masalan:

// 1. Kiruvchi malumot: 14

//     Chiquvchi malumot: Siz juft son kiritingiz. 14 juft son.

// 2. Kiruvchi malumot: 9

//     Chiquvchi malumot: Siz toq son kiritingiz. 9 toq son.

let a = Number(prompt("Raqamni kiriting"));
if (a % 2 == 0) {
  console.log(`Kiruvchi malumot: ${a}`);
  console.log(`Siz juft son kiritdingiz . ${a} juft son`);
} else if (a % 2 != 0) {
  console.log(`Kiruvchi malumot: ${a}`);
  console.log(`Siz toq son kiritdingiz . ${a} toq son`);
} else console.log(`Siz noto'g'ri malumot kiritdingiz`);
