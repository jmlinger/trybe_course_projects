CREATE VIEW historico_reproducao_usuarios AS
SELECT 
    U.usuario_nome AS usuario, C.cancao_titulo AS nome
FROM
    usuarios AS U
INNER JOIN
    historico_de_reproducoes AS HR ON HR.usuario_id = U.usuario_id
INNER JOIN
    cancoes AS C ON C.cancao_id = HR.cancao_id
ORDER BY usuario, nome;
