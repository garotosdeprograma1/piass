CREATE TABLE IF NOT EXISTS cliente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    CPF TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL,
    senha TEXT NOT NULL
);

INSERT INTO cliente(nome, CPF, email, telefone, senha)
VALUES
('ERASMO', '933.213.213-21', 'erasmoreidelas@gmail.com', '455599990202022', 'ReiDelesOFC'),
('ERASMOA1', '933.213.213-22', 'erasmoreidelasA1@gmail.com', '455599990202023', 'ReiDelasOFCA1');

SELECT * FROM cliente;