CREATE VIEW top_2_hits_do_momento AS
SELECT 
    C.cancao_titulo AS cancao, COUNT(HR.cancao_id) AS reproducoes
FROM
    cancoes AS C
INNER JOIN
    historico_de_reproducoes AS HR ON HR.cancao_id = C.cancao_id
GROUP BY cancao
ORDER BY reproducoes DESC , cancao
LIMIT 2;
