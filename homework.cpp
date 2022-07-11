#include <iostream>
using namespace std;
int strLen(char* n);
string foo(string str);
int main() {
   char ch[6] = "barev";
   cout << strLen(ch) << endl;
   cout << foo("barev") << endl;
   return 0;
}
int strLen(char* n)
{
   int count = 0;
   while(*(n+count)!= '\0'){
       count++;
   }
   return count;
}
string foo(string n)
{
   char ch;
   for (int index = 0, l = n.length(); index < l/2; index++) {
      ch = n[index];
      n[index] = n[l-1-index];
      n[l-1-index] = ch;
   }
   return n;
}