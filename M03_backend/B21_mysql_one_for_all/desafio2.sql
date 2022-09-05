CREATE VIEW estatisticas_musicais AS
SELECT
    COUNT(CAN.cancao_id) AS cancoes,
    COUNT(DISTINCT ART.artista_id) AS artistas,
    COUNT(DISTINCT ALB.album_id) AS albuns
FROM
    cancoes AS CAN
INNER JOIN
    artistas AS ART ON ART.artista_id = CAN.artista_id
INNER JOIN
    albuns AS ALB ON ALB.album_id = CAN.album_id;
