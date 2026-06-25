CREATE TABLE IF NOT EXISTS itemos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_os INTEGER,
    id_servico INTEGER,
    id_funcionario INTEGER,
    precoun TEXT NOT NULL,
    FOREIGN KEY (id_os) REFERENCES os(id),
    FOREIGN KEY (id_servico) REFERENCES servico(id),
    FOREIGN KEY (id_funcionario) REFERENCES funcionario(id)
);

INSERT INTO itemos(id_os, id_servico, id_funcionario, precoun)
VALUES
(1, 1, 1, 'R$21,90');

SELECT * FROM itemos;