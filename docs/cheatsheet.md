You can use Markdown tagging to improve the readability of a project readme or the Markdown cells in Jupyter notebooks. The differences between Markdown in the readme files and in notebooks are noted.

Headings: Use #s followed by a blank space for notebook titles and section headings:

    # title
    ## major headings
    ### subheadings
    #### 4th level subheadings

Emphasis: Use this code: Bold: __string__ or **string**, Italic: _string_ or *string*, Strikethrough: ~~string~~

Mathematical symbols: Use this code: $ mathematical symbols $

Monospace font: Surround text with a back single quotation mark (`). Use monospace for file path and file names and for text users enter or message text users see.

Line breaks: Sometimes Markdown doesn’t make line breaks when you want them. Put two spaces at the end of the line, or use this code for a manual line break: <br>

Indented quoting: Use a greater-than sign (>) and then a space, then type the text. The text is indented and has a gray horizontal line to the left of it until the next carriage return.

Bullets: Use the dash sign (-) with a space after it or a space, a dash, and a space (-), to create a circular bullet. To create a sub bullet, use a tab followed a dash and a space. You can also use an asterisk instead of a dash, and it works the same.

Numbered lists: Start with 1. followed by a space, then your text. Hit return and numbering is automatic. Start each line with some number and a period, then a space. Tab to indent to get subnumbering.

Checkboxes in readme files: Use this code for an unchecked box: - [ ]
Use this code for a checked box: - [x]

Tables in readme files: Use this code:

    | Heading | Heading |
    | ----| ----|
    | text   | text |
    | text | text |
Copy to clipboard
Graphics in notebooks: Drag and drop images to the Markdown cell to attach it to the notebook. To add images to other cell types, use graphics that are hosted on the web with this code, substituting url/name with the full URL and name of the image: <img src="url/filename.gif" alt="Alt text" title="Title text" />

Graphics in readme files: Use this code: ![Alt text](url/filename.gif "Title text")

Geometric shapes: Use this code with a decimal or hex reference number from here: UTF-8 Geometric shapes &#reference_number;

Horizontal lines: Use three asterisks: ***
***
Internal links: To link to a section, add an anchor above the section title and then create a link.

Use this code to create an anchor: <a id="section_ID"></a>
Use this code to create the link: [section title](#section-ID)
Make sure that the section_ID is unique within the notebook or readme.

Alternatively, for notebooks you can skip creating anchors and use this code: [section title](#section-title)
For the text in the parentheses, replace spaces and special characters with a hyphen and make all characters lowercase.

Test all links!

External links: Use this code: [link text](http://url)

To create a link that opens in a new window or tab, use this code: <a href="http://url" target="_blank" rel="noopener noreferrer">link text</a>

Test all links!