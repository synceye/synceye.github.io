#include <stdio.h>

int main() {
    int postotak;
    float cijena, nova, iznossnizenja;

    printf("Upisi iznos snizenja i postotak snizenja: ");
    scanf_s("%f %d", &iznossnizenja, &postotak);

    cijena = iznossnizenja / postotak * 100;
    nova = cijena - iznossnizenja;

    printf("Orginalna cijena: %.2fkn\n", cijena);
    printf("Snizena cijena: %.2fkn", nova);
}