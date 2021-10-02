CREATE VIEW faturamento_atual AS
SELECT 
    MIN(P.plano_valor) AS faturamento_minimo,
    MAX(P.plano_valor) AS faturamento_maximo,
    ROUND(AVG(plano_valor), 2) AS faturamento_medio,
    SUM(P.plano_valor) AS faturamento_total
FROM
    planos AS P
INNER JOIN
    usuarios AS U ON U.plano_id = P.plano_id;
