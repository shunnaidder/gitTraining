Ola World! 

----------------- RESUMO DE TRAINING:

> Git: Created by Linus Torvalds

> Git hooks: onde estao os triggers (p.ex. o git Lint que vai verificar qualidade do codigo quando feito o commit)
> .gitconfig (arquivo config global onde estao as configuracoes de name, email, editor, etc)

command: git rm --cached <file> to unstage

command: git checkout -- <file> OR git checkout . (remove all modifications. It returns to the way it was after the last COMMIT)
		  PS: > git checkout <file> (tambem funciona. Desfaz as modificacoes)

command: git config user.name ; git config user.email (to show email or name)

command: git shortlog ; git log --author="<Felipe>" 
command: git log --graph (shows graph so that you can check if there was a merge, rebase, etc.)

command: git show <hash do commit> (p.ex: b8f24c6fcc429e30245ac3fd23f8997c1f5d4045)
			- mostra as modificacoes que foram feitas naqule commit (similar ao DIFF)
			
command: git diff (show the modifcations)
			- You can also do: git diff <file-changed> <file to compare from another branch>
			
command: git diff --name-only (show only what files have been modified)

command: git reset HEAD <file>  (to unstage)

command: git commit -am "<message>" (ja faz "add ." e commit -m ) [VI: RECOMENDA-SE FAZER PASSO A PASSO]

command: git reset --soft <commit hash>  (undo commit AND it will keep the modifications from this commit AND stage them)
command: git reset --mixed <commit hash> (undo commit AND it will keep the modifications from this commit AND leave unstaged)
command: git reset --hard <commit hash>  (undo commit AND it will ignore all changes (it wont keep any modification))
	- OBS: o hash que voce passa eh o commmit no qual voce quer retornar
			
		