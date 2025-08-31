import json
import csv
import xml.etree.ElementTree as ET

class DataManager:
    def __init__(self):
        self.data = None

    def import_json(self, file_path):
        with open(file_path, 'r') as file:
            self.data = json.load(file)

    def import_csv(self, file_path):
        with open(file_path, 'r') as file:
            reader = csv.DictReader(file)
            self.data = [row for row in reader]

    def import_xml(self, file_path):
        tree = ET.parse(file_path)
        root = tree.getroot()
        self.data = [{child.tag: child.text for child in item} for item in root]

    def get_data(self):
        return self.data

# Exemple d'utilisation
if __name__ == '__main__':
    manager = DataManager()
    # manager.import_json('data.json')
    # print(manager.get_data())
