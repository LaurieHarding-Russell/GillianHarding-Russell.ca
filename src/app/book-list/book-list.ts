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

  chatbooks = `
  <span><i>Megrim </i> (The Alfred Gustav Press, 2021). </span>
  <span><i>Fox Love</i> (The Alfred Gustav Press, 2016).</span>
  <span><i>Where the days and nights are equal length</i> (M. C International, 2014). ISBN 9780993676925</span>
  <span><i>Maya: Poems for the Summer Solstice</i> (Leaf Press, 2014).</span>
  <span><i>Apples and Mice</i> (Alfred Gustav Press, 2008). ISBN 978-0-9811327-0-9</span>
  <span><i>Stories of Snow, a ‘holm’ or short chapbook</i> (The Alfred Gustav Press, 2011).</span>
  <span><i>At the End of the Garden</i> (Green Publications, 1990). IBSN: 0-9691555-7-3</span>
`


  anthologies = `
<span>Anthology on hope and healing – title not established – (Qantara Press, 2024, upcoming…).</span>

<span><i>The Winter Happiness Challenge</i> (Lilac Arch Press, 2023).</span>

<span><i>Poems for Ukraine</i> vol. 2 (Brydge Builder Press, 2022).</span>

<span><i>apart: a year of pandemic poetry and prose</i>, edited by Courtney Bates-Hardy and Dave Margoshes (SWG Publication, 2021). ISBN 9780968945172</span>

<span><i>RESISTANCE:RIGHTEOUS RAGE IN THE AGE OF #METOO</i>, ed. by Sue Goyette (University of Regina Press, 2021). ISBN 9780889778016</span>

<span><i>Sweet Water: Poems for the Watersheds, ed. Yvonne Blomer</i> (Caitlin Press, 2020). ISBN=13 978-1-773860220</span>

<span><i>Heartwood: For the Love of Trees, ed. Lesley Strutt</i> (League of Canadian Poets, 2018). ISBN 978-1-896216-51-5</span>

<span><i>Line Dance, ed. Gerry Hill</i> (Burton House, 2016). ISBN 97809948666912</span>

<span><i>Fire and Sky: A Canadian Anthology of Poem</i>, ed. Jocelyn Verret (Brydge Builder Press, 2016).</span>

<span><i>I Found It At the Movies, ed. Ruth Roach Pierson</i> (Guernica, 2014). ISBN 978-1-55071-897-3</span>

<span><i>Family Ties: Memories, Poems and Good Food</i>, ed. Kim Grove (Hiddenbrook, 2014). IBSN 978-1-927725-17-7</span>

<span><i>The Inspired Heart vol. 3</i>, ed. Melinda Cochrane. M.C. International.2014). ISBN 9780993676949</span>

<span><i>The Inspired Heart vol. 2</i>, ed. Bruce Kauffman.  (M.C International, 2013). ISBN 9781494344627</span>

<span><i>Fathers and Grandfathers</i>, ed. Donna Goodrich (Hiddenbrook, 2013). ISBN 978-1-927725-07-8</span>

<span><i>Poet to Poet</i>, eds. Julia Roorda and Elana Wolff (Guernica, 2012). ISBN 978-1-5507-645-0</span>

<span><i>That Not Forgotten</i>, ed. Bruce Kauffman (Hiddenbrook, 2012). ISBN 978-1-897475-89-8</span>

<span><i>Letting Go: Poems about surviving a loss</i>, ed. Hugh MacDonald (Black Moss, 2005).
IBSN 0-88753-393-0</span>

<span><i>Land/Space: An Anthology of Speculative Prairie Literature</i>, eds. Candice Jane Dorsey and Judy
McCrosky. (Tesseract, 2003). IBSN: 1-895836-92-. (98-100, 184-6)</span>

<span><i>The Common Sky: Poems against the US-led Invasion of Iraq</i>, ed. Stephen Gregory (Threesquare Press, 2003).
IBSN: 0-9732578-0-6</span>

<span><i>No Choice but to Trust</i>, ed. James Deahl (Mekler & Deahl, 2000). IBSN, 1-884206-08-5</span>

<span><i>Waiting for you to Speak</i>, ed. James Deahl (Mekler & Deahl, 1999). IBSN: 1-884206-05-0</span>
`;

}
