def exists_word(word, instance):
    all_registers = []
    for file_info in instance.data:
        file_register = {
            "palavra": word,
            "arquivo": file_info["nome_do_arquivo"],
            "ocorrencias": []
        }
        for index, line in enumerate(file_info["linhas_do_arquivo"]):
            if word.lower() in line.lower():
                file_register["ocorrencias"].append({"linha": index + 1})
    if len(file_register["ocorrencias"]) != 0:
        all_registers.append(file_register)

    return all_registers


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
