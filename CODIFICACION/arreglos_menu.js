# Función para ver los arreglos creados y sus elementos
def ver_arreglos(arreglos):
    if not arreglos:
        print("No se han creado arreglos.")
    else:
        print("Arreglos creados:")
        for i, arreglo in enumerate(arreglos):
            print(f"Arreglo {i + 1}: {arreglo}")

# Función para crear un nuevo arreglo
def crear_arreglo(arreglos):
    arreglo = []
    arreglos.append(arreglo)
    print("Se ha creado un nuevo arreglo vacío.")

# ... (otras funciones como agregar_elemento, eliminar_elemento, cambiar_elemento)

# Lista de arreglos creados
arreglos = []

while True:
    print("\nMenú:")
    print("1. Crear un nuevo arreglo")
    print("2. Agregar elemento")
    print("3. Eliminar elemento")
    print("4. Cambiar elemento")
    print("5. Ver arreglos creados y sus elementos")
    print("6. Salir")

    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        crear_arreglo(arreglos)
    elif opcion == "2":
        if arreglos:
            agregar_elemento(arreglos[-1])
        else:
            print("Primero debe crear un arreglo.")
    elif opcion == "3":
        if arreglos:
            eliminar_elemento(arreglos[-1])
        else:
            print("Primero debe crear un arreglo.")
    elif opcion == "4":
        if arreglos:
            cambiar_elemento(arreglos[-1])
        else:
            print("Primero debe crear un arreglo.")
    elif opcion == "5":
        ver_arreglos(arreglos)
    elif opcion == "6":
        break
    else:
        print("Opción no válida. Por favor, seleccione una opción válida.")
