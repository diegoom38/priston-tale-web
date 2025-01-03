import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';
import { New } from 'src/app/interfaces/new.interface';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  private readonly dialog: MatDialog = inject(MatDialog);

  public news: New[] = [
    {
      image: 'https://wiki.priston.com.br/images/e/ec/ImgPristonGroup.png',
      title: 'Sobre o Priston Tale',
      summary: 'Priston Tale, um dos jogos online mais tradicionais, nasceu na Coreia do Sul em 2000, criado pelo desenvolvedor Kenny Zee. Esse MMORPG se destaca por permitir que milhares de jogadores explorem simultaneamente o continente virtual de Priston, combinando o clássico estilo RPG com gráficos impressionantes e modos de câmera totalmente livres para uma experiência 3D imersiva. A trilha sonora e os cenários completam a ambientação envolvente.',
      htmlBlocks: [
        {
          type: 'Image',
          align: 'Center',
          content: 'https://wiki.priston.com.br/images/e/ec/ImgPristonGroup.png'
        },
        {
          type: 'Text',
          align: 'Center',
          content: '<div align="justify">Conhecido como um dos mais tradicionais jogos online disponíveis no mercado, o <b>Priston Tale</b> nasceu na Coreia do Sul em 2000 fruto do trabalho do desenvolvedor <b>Kenny Zee</b>. O jogo está enquadrado no tipo MMO, o que significa que milhares de pessoas se divertem ao mesmo tempo em um mundo virtual – o continente de Priston –, seguindo o prestigiado estilo RPG. O grande diferencial é que, mesmo sendo um jogo online, Priston Tale ou simplesmente "BPT" (como a versão brasileira é conhecida) consegue manter qualidade gráfica impressionante. Os modos de câmera 100% livres permitem uma verdadeira experiência em três dimensões, aproximando o jogador da aventura. A música e a beleza dos cenários também impressionam.<br><p><br>Alguns jogadores podem dizer que os 12 anos de estrada são um fator negativo, pois estamos falando de muito tempo em matéria de games. A comunidade imensa de pristonianos pensa o contrário por considerar a história justamente o fator diferencial. Nossa tradição é reconhecida no mundo inteiro, sendo uma das principais características responsáveis por manter o Priston Tale entre os maiores jogos da categoria. Por meio do antigo e eficiente marketing boca a boca, os jogadores continuam indicando a diversão que oferecemos para seus conhecidos. Sabemos disso porque pesquisas de mercado realizadas por consultorias renomadas de tecnologia apontam que a versão brasileira do <b>Priston Tale está entre os três jogos de MMORPG que mais crescem na América Latina.</b><br></p><p><br>Em termos de tecnologia, como descrevemos acima, o BPT também não deixa a desejar, já que recebe periodicamente melhorias tanto de conteúdo quanto de jogabilidade. Sabemos que a atualização constante é vital para a sobrevivência em um mercado tão competitivo. A comunidade de jogadores brasileira é tão presente a ponto de estar na dianteira da atualização mantida e aprofundada pela <b>Masangsoft</b>, a desenvolvedora do jogo. O Balanceamento de Classes está revendo as habilidades de cada uma das nossas classes, o que resulta em uma experiência completamente nova para os jogadores antigos e em uma experiência mais rica para aqueles que chegam aos servidores.<br></p><p><br></p><b>Priston Tale é voltado para todos os públicos.</b> Não há um perfil exato de jogador. Nos servidores, temos famílias inteiras vivendo tal experiência todos os dias. Falamos de pais e filhos que se divertem muito com o jogo. Jogadores de todas as idades interagem diariamente no ambiente. Através dos personagens, nossos usuários mergulham em uma realidade repleta de aventuras e desafios incríveis!<br></div>'
        }
      ]
    }
  ];

  public openNewDialog(newObj: New): void {
    this.dialog.open(NewDialogComponent, {
      data: newObj,
      width: '80vw',
      height: '80vh'
    })
  }
}
