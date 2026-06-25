CREATE TABLE IF NOT EXISTS servico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    eletrica TEXT NOT NULL,
    hidraulica TEXT NOT NULL,
    pintor TEXT NOT NULL,
  	mecanico TEXT NOT NULL,
  	programador TEXT NOT NULL,
  	designer TEXT NOT NULL,
  	professor TEXT NOT NULL,
    jardineiro TEXT NOT NULL
);

INSERT INTO servico (eletrica, hidraulica, pintor, mecanico, programador, designer, professor, jardineiro)
VALUES
('Elétrica','Hidráulica','Pintor','Mecânico','Programador','Designer','Professor','Jardineiro');

SELECT * FROM servico;