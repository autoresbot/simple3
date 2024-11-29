const readline = require('readline');

// Membuat interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Fungsi untuk meminta nama pengguna
function askUserName() {
    rl.question('Siapa nama kamu? ', (name) => {
        console.log(`Halo, ${name}! Senang bertemu denganmu.`);
        rl.close(); // Menutup readline setelah selesai
    });
}

// Memanggil fungsi
askUserName();
