CREATE TABLE IF NOT EXISTS os (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_cliente INTEGER,
    valort TEXT NOT NULL,
    data TEXT NOT NULL,
    local TEXT NOT NULL,
    descricao TEXT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id)
);

INSERT INTO os(id_cliente, valort, data, local, descricao)
VALUES
(1, 'R$2,00', '06/07/2067', 'Foz do Iguaçu', 'Tudo feito perfeitamente'),
(2, 'R$67,00', '12/06/1997', 'São Paulo', 'Realizado com atraso');

SELECT * FROM os;