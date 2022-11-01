export const translateVerse = (verse) => {
    const books = [
        'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
        'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings',
        '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah',
        'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes',
        'Song of Songs', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel',
        'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
        'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
        'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians',
        '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
        'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy',
        '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter',
        '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'
    ];

    const buku = [
        'Kejadian', 'Keluaran', 'Imamat', 'Bilangan', 'Ulangan', 'Yosua',
        'Hakim-hakim', 'Rut', '1 Samuel', '2 Samuel', '1 Raja-raja',
        '2 Raja-raja', '1 Tawarikh', '2 Tawarikh', 'Ezra', 'Nehemia',
        'Ester', 'Ayub', 'Mazmur', 'Amsal', 'Pengkhotbah', 'Kidung Agung',
        'Yesaya', 'Yeremia', 'Ratapan', 'Yehezkiel', 'Daniel', 'Hosea',
        'Yoel', 'Amos', 'Obaja', 'Yunus', 'Mikha', 'Nahum', 'Habakuk',
        'Zefanya', 'Hagai', 'Zakaria', 'Maleakhi', 'Matius', 'Markus',
        'Lukas', 'Yohanes', 'Kisah Para Rasul', 'Roma', '1 Korintus',
        '2 Korintus', 'Galatia', 'Efesus', 'Filipi', 'Kolose',
        '1 Tesalonika', '2 Tesalonika', '1 Timotius', '2 Timotius', 
        'Titus', 'Filemon', 'Ibrani', 'Yakobus', '1 Petrus', '2 Petrus',
        '1 Yohanes', '2 Yohanes', '3 Yohanes', 'Yudas', 'Wahyu'
    ];

    const regex = new RegExp('[a-zA-Z]+', 'i');

    let match = verse.match(regex);
    let found = verse.substring(0, verse.indexOf(match[0]) + match[0].length).toLowerCase();
    let index = books.findIndex((b) => b.toLowerCase() === found);
    let value = verse.replace(books[index], buku[index]);

    return value;
}