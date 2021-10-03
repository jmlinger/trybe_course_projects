DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN nomeArtista VARCHAR(50))
BEGIN
SELECT 
artista_nome AS artista,
    album_titulo AS album
FROM 
artistas AS ART
INNER JOIN
    albuns AS ALB ON ALB.artista_id = ART.artista_id
WHERE ART.artista_nome = nomeArtista
ORDER BY album;
END $$
DELIMITER ;
