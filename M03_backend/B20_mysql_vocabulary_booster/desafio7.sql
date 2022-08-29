SELECT
    UCASE(CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME)) AS `Nome completo`,
    H.START_DATE AS `Data de início`,
    E.SALARY AS Salário
FROM
    hr.employees AS E
        INNER JOIN
    hr.job_history AS H ON H.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE
    MONTH(H.START_DATE) = 1
OR MONTH(H.START_DATE) = 2
        OR MONTH(H.START_DATE) = 3
ORDER BY `Nome completo`, `Data de início`;
