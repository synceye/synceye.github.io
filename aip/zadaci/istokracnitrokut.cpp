#include <stdio.h>
#include <math.h>

int main() {
	int xa, ya, xb, yb, xc, yc;
	float c, b, a, opseg, povrsina, visina;

	printf("Unesi koordinate za tocku a: ");
	scanf_s("%d %d", &xa, &ya);
	printf("\nUnesi koordinate za tocku b: ");
	scanf_s("%d %d", &xb, &yb);
	printf("\nUnesi koordinate za tocku c: ");
	scanf_s("%d %d", &xc, &yc);

	c = sqrt(pow(xb - xa, 2) + pow(yb-ya, 2));
	b = sqrt(pow(xc - xa, 2) + pow(yc - ya, 2));
	a = b;
	opseg = c + (2*b);
	visina = sqrt(pow(b, 2) - pow(c/2, 2));
	povrsina = (c*visina)/2;


	printf("\na: %.2f cm", a);
	printf("\nb: %.2f cm", b);
	printf("\nc: %.2f cm", c);

	printf("\nVisina: %.2f cm", visina);
	printf("\nOpseg: %.2f cm", opseg);
	printf("\nPovrsina: %.2f cm", povrsina);


	return 0;
}