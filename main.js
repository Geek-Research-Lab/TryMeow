var main = (function()
{
	Meow_Lex = new Meow_Lex();
	Meow_Parse = new Meow_Parse(Meow_Lex);
	Meow_Parse.Meow_Program();
	Meow_OutStream.Meow_Write('\n');
});
