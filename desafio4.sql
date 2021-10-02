CREATE VIEW top_3_artistas AS
SELECT 
    artista_nome AS artista, COUNT(usuario_id) AS seguidores
FROM
    artistas AS A
INNER JOIN
    seguindo_artistas AS SA ON SA.artista_id = A.artista_id
GROUP BY artista
ORDER BY seguidores DESC , artista;
