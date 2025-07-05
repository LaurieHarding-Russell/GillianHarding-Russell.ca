import { Component, ViewEncapsulation } from '@angular/core';
import { BookComponent } from './book/book';


@Component({
    selector: 'book-list',
    imports: [BookComponent],
    templateUrl: './book-list.html',
    encapsulation: ViewEncapsulation.ShadowDom,
    styleUrls: [
        "book-list.css"
    ]
})
export class BookListComponent {

  chapbooks = `
  <span><cite>A Handle on Things </cite> (The Alfred Gustav Press, Upcoming summer 2026). </span>
  <span><cite>Megrim </cite> (The Alfred Gustav Press, 2021). </span>
  <span><cite>Fox Love</cite> (The Alfred Gustav Press, 2016).</span>
  <span><cite>Where the days and nights are equal length</cite> (M. C International, 2014). ISBN 9780993676925</span>
  <span><cite>Maya: Poems for the Summer Solstice</cite> (Leaf Press, 2014).</span>
  <span><cite>Apples and Mice</cite> (Alfred Gustav Press, 2008). ISBN 978-0-9811327-0-9</span>
  <span><cite>Stories of Snow, a ‘holm’ or short chapbook</cite> (The Alfred Gustav Press, 2011).</span>
  <span><cite>At the End of the Garden</cite> (Green Publications, 1990). IBSN: 0-9691555-7-3</span>
`


  anthologies = `

<span><cite>Voices Unbound</cite>, ed Som (Fresh Words, 2025).</span>

<span>Anthology on hope and healing – title not established – (Qantara Press, upcoming…).</span>

<span><cite>The Winter Happiness Challenge</cite> (Lilac Arch Press, 2023).</span>

<span><cite>Poems for Ukraine</cite> vol. 2 (Brydge Builder Press, 2022).</span>

<span><cite>apart: a year of pandemic poetry and prose</cite>, edited by Courtney Bates-Hardy and Dave Margoshes (SWG Publication, 2021). ISBN 9780968945172</span>

<span><cite>RESISTANCE:RIGHTEOUS RAGE IN THE AGE OF #METOO</cite>, ed. by Sue Goyette (University of Regina Press, 2021). ISBN 9780889778016</span>

<span><cite>Sweet Water: Poems for the Watersheds, ed. Yvonne Blomer</cite> (Caitlin Press, 2020). ISBN=13 978-1-773860220</span>

<span><cite>Heartwood: For the Love of Trees, ed. Lesley Strutt</cite> (League of Canadian Poets, 2018). ISBN 978-1-896216-51-5</span>

<span><cite>Line Dance, ed. Gerry Hill</cite> (Burton House, 2016). ISBN 97809948666912</span>

<span><cite>Fire and Sky: A Canadian Anthology of Poem</cite>, ed. Jocelyn Verret (Brydge Builder Press, 2016).</span>

<span><cite>I Found It At the Movies, ed. Ruth Roach Pierson</cite> (Guernica, 2014). ISBN 978-1-55071-897-3</span>

<span><cite>Family Ties: Memories, Poems and Good Food</cite>, ed. Kim Grove (Hiddenbrook, 2014). IBSN 978-1-927725-17-7</span>

<span><cite>The Inspired Heart vol. 3</cite>, ed. Melinda Cochrane. M.C. International.2014). ISBN 9780993676949</span>

<span><cite>The Inspired Heart vol. 2</cite>, ed. Bruce Kauffman.  (M.C International, 2013). ISBN 9781494344627</span>

<span><cite>Fathers and Grandfathers</cite>, ed. Donna Goodrich (Hiddenbrook, 2013). ISBN 978-1-927725-07-8</span>

<span><cite>Poet to Poet</cite>, eds. Julia Roorda and Elana Wolff (Guernica, 2012). ISBN 978-1-5507-645-0</span>

<span><cite>That Not Forgotten</cite>, ed. Bruce Kauffman (Hiddenbrook, 2012). ISBN 978-1-897475-89-8</span>

<span><cite>Letting Go: Poems about surviving a loss</cite>, ed. Hugh MacDonald (Black Moss, 2005).
IBSN 0-88753-393-0</span>

<span><cite>Land/Space: An Anthology of Speculative Prairie Literature</cite>, eds. Candice Jane Dorsey and Judy
McCrosky. (Tesseract, 2003). IBSN: 1-895836-92-. (98-100, 184-6)</span>

<span><cite>The Common Sky: Poems against the US-led Invasion of Iraq</cite>, ed. Stephen Gregory (Threesquare Press, 2003).
IBSN: 0-9732578-0-6</span>

<span><cite>No Choice but to Trust</cite>, ed. James Deahl (Mekler & Deahl, 2000). IBSN, 1-884206-08-5</span>

<span><cite>Waiting for you to Speak</cite>, ed. James Deahl (Mekler & Deahl, 1999). IBSN: 1-884206-05-0</span>
`;

}
