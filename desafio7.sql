CREATE VIEW perfil_artistas AS;
SELECT 
    A.artista_nome AS artista,
    ALB.album_titulo AS album,
    COUNT(SA.artista_id) AS seguidores
FROM
    artistas AS A
INNER JOIN
    albuns AS ALB ON ALB.artista_id = A.artista_id
INNER JOIN
    seguindo_artistas AS SA ON SA.artista_id = A.artista_id
GROUP BY ALB.album_id
ORDER BY seguidores DESC , artista, album;
