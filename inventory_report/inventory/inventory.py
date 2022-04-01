from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
import csv
import json
import xml.etree.ElementTree as ET


class Inventory:
    def details_return(data, details):
        if details == "simples":
            return SimpleReport.generate(data)
        else:
            return CompleteReport.generate(data)

    @classmethod
    def import_data(cls, path, details):
        if path.endswith(".csv"):
            with open(path) as file:
                data = list(csv.DictReader(file))
        elif path.endswith(".json"):
            with open(path) as file:
                data = json.load(open(path))
        else:
            data = []
            read_xml = ET.parse(path).getroot()
            for product in read_xml:
                obj = {}
                for attribute in product:
                    obj[attribute.tag] = attribute.text
                data.append(obj)

        return cls.details_return(data, details)
