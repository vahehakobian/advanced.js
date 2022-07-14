#include <iostream>
#include <cstring>
char* strset(char* s, char ch);
char* strcat(char* s1, const char* s2);
void strmove(char* s, int n);
int main() {
   char ch[5] = {"Vahe"};
   int num = 2;
   char ch1[9] = {"Hakobyan"};
   std::cout << strcat(ch,ch) << std::endl;
   std::cout << strset(ch,'a') << std::endl;
   strmove(ch1,num);
   return 0;
}
char* strcat(char* s1, char* s2)
{
  int count1 = 0;
  int count2 = 0;
  while(*(s1+count1)!= '\0') {
    count1++;
  }
  while(*(s2+count2)!= '\0') {
    count2++;
  }
  int count = count1 + count2+1;
  for (int i = 0, j=0; i < count; i++)
  {
    if(i >= count1)
    {
      *(s1+i) = *(s2+j);
      j++;
    }
  }
  return s1;
}
char* strset(char* s, char ch)
{
   int i = 0;
   while(s[i] != '\0'){
       s[i] = ch; 
       i++;
   }
   return s;
}
void strmove(char* s, int n)
{
    while (n)
    {
        std::swap(s[0],s[strlen(s) - 1]);
        for(int i = strlen(s) - 1; i > 1; --i)
        {
            std::swap(s[i],s[i - 1]);
        }
        --n;
    }
    std::cout << s;
}





