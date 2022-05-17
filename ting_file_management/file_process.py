import sys
from .file_management import txt_importer


def process(path_file, instance):
    file_lines_list = txt_importer(path_file)

    file_info = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(file_lines_list),
        "linhas_do_arquivo": file_lines_list
    }

    if all(info["nome_do_arquivo"] != path_file for info in instance.data):
        instance.enqueue(file_info)

    sys.stdout.write(f"{file_info}")


def remove(instance):
    """Aqui irá sua implementação"""


def file_metadata(instance, position):
    """Aqui irá sua implementação"""
