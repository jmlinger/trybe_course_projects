from datetime import date, datetime


class SimpleReport:
    def stringToDate(param1):
        return datetime.strptime(
            param1,
            "%Y-%m-%d",
        ).date()

    def countCompany(companyNameList):
        countCompany = 0
        company_name = companyNameList[0]
        for companyName in companyNameList:
            count = companyNameList.count(companyName)
            if count > countCompany:
                countCompany = count
                company_name = companyName
        return company_name

    @classmethod
    def generate(self, list):
        manufacturingDate = min([item["data_de_fabricacao"] for item in list])
        expirationDate = self.stringToDate(list[0]["data_de_validade"])
        companyNameList = []
        for item in list:
            companyNameList.append(item["nome_da_empresa"])
            expirationDateitem = self.stringToDate(item["data_de_validade"])
            if date.today() < expirationDateitem < expirationDate:
                expirationDate = expirationDateitem

        company_name = self.countCompany(companyNameList)
        returnManufacturingText = 'Data de fabricação mais antiga:'
        returnExpirationText = 'Data de validade mais próxima:'
        mostCompanyText = 'Empresa com maior quantidade de produtos estocados:'
        return (
            f'{returnManufacturingText} {manufacturingDate}\n'
            f'{returnExpirationText} {expirationDate}\n'
            f'{mostCompanyText} {company_name}\n'
        )
