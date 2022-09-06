from inventory_report.importer.importer import Importer
import json


class JsonImporter(Importer):
    def import_data(path):
        try:
            with open(path) as file:
                return json.load(file)
        except ValueError:
            raise ValueError('Arquivo inválido')
