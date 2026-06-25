CREATE TABLE IF NOT EXISTS funcionario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    CPF TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    telefone TEXT NOT NULL,
    senha TEXT NOT NULL,
    especialidade TEXT NOT NULL
);

INSERT INTO funcionario(nome, CPF, email, telefone, senha, especialidade)
VALUES
('ERASMO FUNC', '111.213.213-21', 'erasmofunc@gmail.com', '455599990202055', 'FuncReiDelesOFC', 'limpar carro'),
('ERASMOB2', '111.213.213-22', 'erasmoreidelasb2@gmail.com', '455599990202066', 'ReiDelasOFCB2', 'farmar aura');

SELECT * FROM funcionario;