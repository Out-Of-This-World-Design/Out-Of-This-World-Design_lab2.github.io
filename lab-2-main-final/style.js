$( document ).ready(function() {

    

    $.getJSON('./constitution.json', function(data) {         
        // Navbar Brand
        $("#navbar-brand").html(`<img src="./img/flag.png" alt="">${data.name}`)

        // Links and Content
        var count = 1;
        var ul = `<li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#preamble">
                        ${data.children[0].name}
                    </a>  
                  </li>`

        var title = `
            <h1 id="preamble"><strong>${data.children[0].name}</strong></h1>
            <p id="paragraph${count++}">${data.children[0].children[0].content}</p>
            `
        
        for(let i = 1; i < data.children.length; i++) {
            // Navbar List -------------------------------------
            var str = `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${data.children[i].name}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">`

            // Loop for Navbar
            for(let j = 0; j < data.children[i].children.length; j++){
                str += `<a class="dropdown-item" href="#${(data.children[i].children[j].num).toLowerCase().replace(/\s/g, '')}">
                            ${data.children[i].children[j].num} - ${data.children[i].children[j].name}
                        </a>`
            }
            
            str +=`</ul>
                </li>`

            ul += str
            // End of navbar list --------------------------------

            // Loop for Constitution ----------------------------------
            title += `<h1><strong>${data.children[i].name}</strong></h1>`

            // Articles & Amendments
            for(let j = 0; j < data.children[i].children.length; j++){
                title += `
                    <h4 id="${(data.children[i].children[j].num).toLowerCase().replace(/\s/g, '')}">
                            ${data.children[i].children[j].num} - ${data.children[i].children[j].name}
                    </h4>`

                    // Articles
                    for(let k = 0; k < data.children[i].children[j].children.length; k++){
                        // Sections
                        if (data.children[i].children[j].children[k].children.length != 0) {
                            if(data.children[i].children[j].children[k].num){
                            title += `
                                <h5>
                                    ${data.children[i].children[j].children[k].num} - ${data.children[i].children[j].children[k].name}
                                </h5>`
                            }

                            // Section Paragraphs
                            for(let l = 0; l < data.children[i].children[j].children[k].children.length; l++){
                                title += `
                                    <p id="paragraph${count++}">${data.children[i].children[j].children[k].children[l].content[0]}</p>
                                `
                            }

                        // Amendment Paragraphs
                        } else {
                            title += `<p id="paragraph${count++}">${data.children[i].children[j].children[k].content[0]}</p>`
                        }
                        title +=`</hr>`
                    }
                    title +=`</hr>`
                
            }
            // End of Constitution --------------------------------
        }

        $("#navbar-links").html(ul)
        $("#constitution").html(title)

        var lastEvent;

        $("p").click((event) => {
            var id = event.target.id
            $(`#${id}`).addClass("active")
            
            if(lastEvent) {
                $(`#${lastEvent}`).removeClass("active")
            }

            lastEvent = id;
            
            switch(id){
                case "paragraph1":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The preamble of the United States constitution serves as an overview of the 
                        purpose for the rest of the document. Justice, peace, and freedom are among 
                        the most important overarching ideals for establishing a union with the 
                        Constitution.</p>
                    `)
                    break;
                case "paragraph2":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Here, the founders declared the foundation of 
                        America's legislative branch - 
                        the Senate and the House of representatives.</p>
                    `)
                    break;
                case "paragraph3":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The members of the house of representatives are stated to be re-elected every 
                        2 years, and these representatives must satisfy the 3 qualifications 
                        in the following paragraph:</p>
                    `)
                    break;
                case "paragraph4":
                    var imageUr4 = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>All hous representatives must be at least 25 years old, and 
                        they must have been a citizen of the United States for at least 7 years, 
                        and they must live 
                        in the state they are elected as a Representative for.</p>
                    `)
                    break;
                case "paragraph5":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>This paragraph defines the method used to assign congressional 
                        district amongst the existing states. The founders decided that 
                        giving each state the same number of House representatives would 
                        create an unequal distribution of power - voters from smaller states 
                        would have much more voting power than a voter from a state with a
                         large population. To address this issue, states were assigned a number 
                         of House Representatives based on their population - this paragraph states 
                         that each state will have at least 1 representative, plus another 
                         representative for every 30,000 people living in the state. 
                         This section brings some light to America's dark past - 
                         "three fifths of all other Persons" translates to "slaves will 
                         be counted as three fifths of a person". This was included to 
                         alleviate the controversy that arose from discussions around whether 
                        slaves should be counted as a part of a states population.</p>
                    `)
                    break;
                case "paragraph6":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If a Representative were to resign for any reason or if 
                        they were unable to continue serving as a representative, the state
                         governer has
                         the power to hold an election to fill the vacant seat in the House.</p>
                    `)
                    break;
                case "paragraph7":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The House of Representatives holds the power to
                         begin the impeachment process and officially impeach a 
                         president, vice president, or any civil officer. 
                         A common misconception exists with this - some may believe that 
                         "impeachment" means "to be removed from office". 
                         However, as we have seen in recent years (2019 and 2021), 
                         this is not the case. In fact, we have witnessed that the 
                         President of the United States can be impeached more than once, 
                         and can be acquitted by the Senate both times. "Impeachment" 
                         simply means that a trial will be held by the
                         Senate for the impeached public servant. </p>
                    `)
                    break;
                case "paragraph8":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The members of the senate will consist of 2 senators for 
                        each state, who are re-elected every 6 years. Every senator 
                        holds the power of one vote when 
                        it is time to vote on a proposed bill or nomination.</p>
                    `)
                    break;   
                case "paragraph9":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The founders decided that it would be best for only 1/3rd of 
                        the senate to be re-elected at a time, so senatorial elections are 
                        staggered to be every 2 years. If a representative is not able to 
                        continue serving the House, they will be 
                        temporarily replaced by the state governer.</p>
                    `)
                    break;
                case "paragraph10":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>All elected senators must be at least 30 years old and have
                         been a citizen of the United States for at least 9 years. 
                        They must be a resident of the state they are elected to represent.</p>
                    `)
                    break;
                case "paragraph11":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The Vice President is the President of the Senate, and has the power 
                        to break ties in the Senate when votes are equally divided.</p>
                    `)
                    break;
                case "paragraph12":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If the Vice President is unable to serve, the Senate has the power 
                        to choose the person who will serve in their place. This person is known as 
                        the Speaker of the House. The Speaker of the House is the next in the line of
                         sucession of power 
                        if the President and the Vice President are both unable to serve.</p>
                    `)
                    break;
                case "paragraph13":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Impeachments are imposed by the House of Representatives. 
                        The Senate conducts the trial that
                        decides whether the public servant in question is removed or 
                        acquitted. Two-thirds of Senators must be present to act as a
                         jury for the trial,
                         and the Supreme Court chief justice presides over the trial.</p>
                    `)
                    break;
                case "paragraph14":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>A successful impeachment only results in the removal of the 
                        public servant from power. Once removed, the public servant can 
                        undergo lawsuits or criminal prosecution as any other U.S. citizen would. </p>
                    `)
                    break;
                case "paragraph15":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>This paragraph states that there is power at the 
                        state level to determine how elections for state Senators and 
                        Representatives should be held. It also notes that Congress has 
                        absolute power over this, 
                        so they can overrule decisions made at the state level.</p>
                    `)
                    break;
                case "paragraph16":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is required to meet at least once a year on the first Monday of December, 
                        but they have the power to choose a different day if needed. </p>
                    `)
                    break;   
                case "paragraph17":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Whenever a member of the House is elected, 
                        the House and Senate both reserve the power to judge the 
                        election the representatives or senators qualifications. 
                        In order to complete the day to day business activities, 
                        a majority of representatives able to vote must be present.</p>
                    `)
                    break;
                case "paragraph18":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If two-thirds of the House or Senate agree that a member should be expelled, that member will be expelled. </p>
                    `)
                    break;
                case "paragraph19":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The Senate and the House must keep a record of all proceedings 
                        they deal with. Congress holds the power to decide that some of the 
                        information recorded is to be kept secret. However, if 1/5th of the 
                        present voters vote that a proceeding must be recorded, it will be recorded.</p>
                    `)
                    break;
                case "paragraph20":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If the House or the Senate decide that they want to move their 
                        proceedings from their usual locations to somewhere else, they are not allowed
                         to do so for more than 3 days without an agreement from the other.</p>
                    `)
                    break;
                case "paragraph21":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The treasury must pay all members of Congress for 
                        their services. Congress members are also protected from 
                        being arrested as a result of a lawsuit, but they can still be arrested for 
                        treason, felony, or other criminal offenses.</p>
                    `)
                    break;
                case "paragraph22":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>A member of the Senate or House may not hold any other 
                        position of federal power during their term. </p>
                    `)
                    break;
                case "paragraph23":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If the Federal Government wants to spend or raise more money, 
                        the House must begin the process. They will be responsible for creating the bills. 
                        The Senate holds the power to either approve or amend these bills.</p>
                    `)
                    break;
                case "paragraph24":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Once bills pass the House and the Senate,
                         the President must approve and sign it. 
                         The President can also reject the presented bill and 
                         return it to the House. If rejected and if the House agrees to 
                         reconsider it, the bill will become law if it is able to pass with
                          2/3rds of both the House and the Senate. If the President does not
                           acknowledge the bill for 10 days (Sunday excluded), it will become law. </p>
                    `)
                    break;   
                    case "paragraph25":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>‌Another option to get a vetoed bill into law is reworking the 
                        bill with the intention of persuading the President to sign it.
                         If the President rejects it again, the same process can be followed to 
                         override the veto 
                        (2/3rds of the House and Senate must approve the bill).</p>
                    `)
                    break;
                case "paragraph26":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The following items describe the power of Congress:</p>
                    `)
                    break;
                case "paragraph27":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to impose taxes and tariffs for the entirety of the United States</p>
                    `)
                    break;
                case "paragraph28":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to borrow money from the Federal Government</p>
                    `)
                    break;
                case "paragraph29":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to come to agreements with foreign nations on the standards of currency</p>
                    `)
                    break;
                case "paragraph30":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to establish a process to become a U.S. citizen as well as the power to establish nationwide laws on bankruptcies</p>
                    `)
                    break;
                case "paragraph31":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to further regulate the economy through national standards</p>
                    `)
                    break;
                case "paragraph32":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to punish those who countefeit U.S. currency</p>
                    `)
                    break; 
                case "paragraph33":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to establish postal offices and routes</p>
                    `)
                    break;
                case "paragraph34":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to award patents to authors and scientists</p>
                    `)
                    break;
                case "paragraph35":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to establish inferior courts that must report to the Supreme Court</p>
                    `)
                    break;
                case "paragraph36":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to define standards of crimes of pirates as well as punishments</p>
                    `)
                    break;
                case "paragraph37":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to declare war</p>
                    `)
                    break;
                case "paragraph38":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to maintain a national Army</p>
                    `)
                    break;
                case "paragraph39":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to maintain a national Navy</p>
                    `)
                    break;  
                case "paragraph40":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to establish rules for the Army and Navy</p>
                    `)
                    break;
                case "paragraph41":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to impose martial law</p>
                    `)
                    break;
                case "paragraph42":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to organize and arm an Army, appoint officers, and maintain authority in Army training</p>
                    `)
                    break;
                case "paragraph43":
                    var imageUr4 = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to govern lands obtained with permission from the states like forts and arsenals</p>
                    `)
                    break;
                case "paragraph44":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress has the power to establish new processes, structures, and laws that support all previously mentioned powers as time progresses</p>
                    `)
                    break;
                case "paragraph45":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is not allowed to ban the importation of slaves prior to the year 1808,
                         but may impose taxes per slave. Yet another shed of light on a very dark
                          place in U.S. history.
                        </p>
                    `)
                    break;
                case "paragraph46":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Anyone under trial of a crime may not have their right to defend themselves in court removed unless it is a threat to national safety. </p>
                    `)
                    break;
                case "paragraph47":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is not allowed to pass laws that 
                        negatively target groups of people without the standard 
                        court process. Congress is also not allowed to pass laws that 
                        allow people to be arrested for crimes 
                        that were made illegal after they committed the crime.</p>
                    `)
                    break;   
                case "paragraph48":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is not allowed to set income tax laws for states that are not determined by results of the census.</p>
                    `)
                    break;
                case "paragraph49":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is not allowed to impose tax on goods from specific states</p>
                    `)
                    break;
                case "paragraph50":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is not allowed to favor ports of states unfairly.</p>
                    `)
                    break;
                case "paragraph51":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress is not allowed to directly withdraw money from the Treasury</p>
                    `)
                    break;
                case "paragraph52":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>No person of power within Congress is allowed to accept bribes from foreign states.</p>
                    `)
                    break;
                case "paragraph53":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>States are not allowed to practice the same powers as
                         Congress at the federal level, such as entering foreign treaties, 
                         assign value to money, pass any laws that target groups of people or 
                         laws that allow for the arrest of people that have committed crimes that 
                         were not illegal 
                        at the time of committing the crime, etc.</p>
                    `)
                    break;
                case "paragraph54":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>States may not impose taxes on imports or exports</p>
                    `)
                    break;
                case "paragraph55":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>States may not declare war</p>
                    `)
                    break;   
                case "paragraph56":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President of the United States holds 
                        executive power over the U.S., and has a term limited to 4 years 
                        unless re-elected for an additional 4 years. </p>
                    `)
                    break;
                case "paragraph57":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Each state has the power to appoint an 
                        appropriate number of electors that is equal to the number of 
                        senators and representatives that the state is entitled to. 
                        No members of the Senate or House may be considered as an Elector. 
                        This is known as the Electoral College.</p>
                    `)
                    break;
                case "paragraph58":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Electors are required to follow the laws of 
                        their respective states for voting procedures. 
                        Votes from Electors are to be counted in the presence 
                        of the Senate and the House. The presidential candidate who 
                        obtains the most electoral votes will win the Presidency. 
                        If more than 1 candidate holds a majority (a tie), 
                        the Vice President will vote to break the tie. </p>
                    `)
                    break;
                case "paragraph59":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress may determine the appropriate time for states to vote for electors - 
                        this day is consistent for the whole nation. </p>
                    `)
                    break;
                case "paragraph60":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The president must: be at least 35 years old, be a natural citizen, 
                        and have lived in the U.S. for at least 14 years. </p>
                    `)
                    break;
                case "paragraph61":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If anything were to happen to the President that would prevent them from carrying on their duties, the Vice President will carry on those duties. </p>
                    `)
                    break;
                case "paragraph62":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President will recieve a salary that is set at the beginning of their term and will not be changed during their term. </p>
                    `)
                    break;
                case "paragraph63":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President must pledge the following Affirmation:</p>
                    `)
                    break;   
                    case "paragraph64":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>"I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States."</p>
                    `)
                    break;
                case "paragraph65":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President serves as the commander in cheif of the Army and Navy. 
                        The President alos has the 
                        power to pardon individuals from judicial rulings</p>
                    `)
                    break;
                case "paragraph66":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President has the power, with 2/3rds permission from the 
                        Senate, to form treaties. With the same rule, the President also has 
                        the power to appoint cabinet members, such as Supreme Court 
                        Judges, Ambassadors and other Officers of the U.S.</p>
                    `)
                    break;
                case "paragraph67":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President has the power to appoint temporary members of the 
                        Senate when vacancies arrive during a Recess of the Senate.</p>
                    `)
                    break;
                case "paragraph68":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President must deliver a State of the Union, which is a 
                        way of reporting to Congress about their opinions on the
                         current direction and status of the country. </p>
                    `)
                    break;
                case "paragraph69":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>The President, Vice President, and all civil officers can be impeached should they be 
                        convicted of treason, bribery, or high crimes and misdemanors.
                        </p>
                    `)
                    break;
                case "paragraph70":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>All judicial powers in the U.S. are subject to the Supreme Court, 
                        and Supreme Court Justices can hold their positions for 
                        life as long as their behavior remains "good".</p>
                    `)
                    break;
                case "paragraph71":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Judicial power is extended to all cases affecting people of all levels within the United States.</p>
                    `)
                    break; 
                case "paragraph72":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>In cases affecting Ambassadors, public Ministers and Consuls, etc., the 
                        Supreme Court has the final say in jurisdiction.</p>
                    `)
                    break;
                case "paragraph73":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>All crimes must be tried in the presence of a jury, except in the case of an impeachment where the Senate serves as the jury. </p>
                    `)
                    break;
                case "paragraph74":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>If a person goes to war against the U.S. or provides aid to an enemy, they will be convicted of treason so long as the offender admits guilt or if two witnesses provide a damning testimony.
                        </p>
                    `)
                    break;
                case "paragraph75":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Congress holds the power to declare punishment for those guilty of treason. This punishment only applies to the offender directly.</p>
                    `)
                    break;
                case "paragraph88":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>All Americans have the right to practice their own religion, the right to express speech freely, 
                        and the right to peacedully assemble in protest against the Government.
                        This is argualbly one of the most important amendments to Americans, even today.</p>
                    `)
                    break;
                case "paragraph89":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p> All Americans have the right to own firearms. 
                        Today, we live in a world where mass shootings are rampant. 
                        There is currently much controversy surrounding the ideas of gun
                         laws and whether or not the 2nd amendment should be repealed, 
                         since times have 
                        changed consideribly since this amendment was signed into law.</p>
                    `)
                    break;
                case "paragraph90":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>No American will be forced to house soldiers in their own home.</p>
                    `)
                    break;                    
                //======================================================================================
                case "paragraph76":
                    var imageUrl = "/img/A4S1.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>In other words: the policies of other states must be recognized by other states, 
                        even if the laws may not align. An example of this section in recent action 
                        is the legitmacy of same-sex marriage across mutliple states.</p>
                        
                    `)
                    break;
                case "paragraph77":
                var imageUrl = "/img/A4S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>A citizen of the United States of America will be granted all 
                    privileges and immunities across many states. However, this has 
                    led to several different interpretations. One prime modern example
                    is the legtimacy of same-sex marriage across several states.</p>
                    
                `)
                break;
                case "paragraph78":
                var imageUrl = "/img/A4S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>If there ever was a situation where a person is charged with a crime 
                    and flees to another state, they may still be required executive authority 
                    of the state from which they had escaped.  This includes petty theft, and
                    other smaller crimes.</p>
                    
                `)
                break;
                case "paragraph79":
                var imageUrl = "/img/A4S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>This clause criminalized all
                    slaves that had escaped from their owners. This is also known as the 
                    Fugitive Slave Clause, which has since lost 
                    its meaning when slavery was abolished. </p>
                    
                `)
                break;
                case "paragraph80":
                var imageUrl = "/img/A4S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>Any creating of new states, leaving states, and potential combining 
                    of two or more states must be approved by the federal court.</p>
                    
                `)
                break;
                case "paragraph81":
                var imageUrl = "/img/A4S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>Congress has the authority to make any necessary rules regarding 
                    territories within the border of the United States.</p>
                    
                `)
                break;
                case "paragraph82":
                var imageUrl = "/img/A4S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>The United States guarantees safety of every state and all states
                    will be protected from invasions, including those between states.</p>
                    
                `)
                break;
                case "paragraph83":
                var imageUrl = "/img/A5.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                     <p>Article 5 describes the well-known procedure whenever there is a 
                     proposed amendments to the constitution. On an ammendment to the states, 
                     two-thirds of the House of
                     Representations must approve of the amendment. Two-thirds of Congress
                     must also approve of it. Then, three-quarters of the states must approve
                     of the changes before officially adding it to the Constitution. If the 
                     amendment wants to be approved without the Congress, three-fourths
                     of the states must approve of the proposed changes.</p>
                     
                 `)
                break;
                case "paragraph84":
                var imageUrl = "/img/A6S1.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>Introducing Article 6, the paragraph states that all debt 
                    that was present before the existence of the Constitution are still 
                    valid.</p>
                    
                `)
                break;
                case "paragraph85":
                var imageUrl = "/img/A6S2.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>This is known as the "Supremacy Clause" stating that the law
                    of the federal level will be superior to local and state laws - meaning
                    that the entire land under the United States will follow federal laws. This
                    also applies to treaties; treaties remain as supreme law.</p>
                    
                `)
                break;
                case "paragraph86":
                var imageUrl = "/img/A6S3.jpeg"
                $('body').css('background-image', 'url(' + imageUrl + ')');
                $("#constitution-narration").html(`
                    <p>All members of the House, Legislature, and the Senate are under an Oath. There
                    will also be no religious requirement for any of the members of the House, Legislature, 
                    and Senate. This follows with the first Amendment of the Bill of Rights, which highlights 
                    the freedom of religion.</p>
                    
                `)
                break;
                case "paragraph88":
                    var imageUrl = "/img/Amendment1.jpg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>THOUGHTS ABOUT PARAGRAPH 88</p>
                        
                    `)
                    break;
                case "paragraph89":
                    var imageUrl = "/img/Amendment2.jpg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>${event.target.id}</p>
                        
                    `)
                    break;
                case "paragraph91":
                    var imageUrl = "/img/Amendment4.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Any related searches require a legal warrant. Amendment 4 is frequently discussed
                        due to several past incidences. For example, the program "stop and frisk" is a brief 
                        stop and potential detainment of a person within "reasonable suspicion".
                        Another controversy is the usage of "wiretapping", used by the NSA after 9/11 
                        to detect potential terrorists. Both led to discussions about racial profiling
                        and the proper use of authoritative force.</p>
                        
                    `)
                    break;
                case "paragraph92":
                    var imageUrl = "/img/Amendment5.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Any citizen of the United States charged under a felony have a right 
                        to receive a Grand Jury.</p>
                        
                `)
                break;
                case "paragraph93":
                    var imageUrl = "/img/Amendment5.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Any citizen of the United States are not allowed to be charged
                        twice for the same crime</p>
                        
                `)
                break;
                case "paragraph94":
                    var imageUrl = "/img/Amendment5.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Any citizen of the United States have a right to remain silent 
                        under the grounds that it may incriminate them.</p>
                        
                `)
                break;
                case "paragraph95":
                    var imageUrl = "/img/Amendment5.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>This is also known as the Eminent Domain. Any private property that
                        will be used for public use will be compensated appropriately.</p>
                        
                `)
                break;
                case "paragraph96":
                    var imageUrl = "/img/Amendment6.jpeg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>Any citizen of the United States has a right for a speedy trial. They also
                        have a right to be informed of what they are being charged of and which crime 
                        they have commited. Any citizen also has a right to receive a lawyer to provide them
                        proper legal advice and consultation.</p>
                        
                `)
                case "paragraph87":
                        var imageUrl = "/img/Article7.jpeg"
                        $('body').css('background-image', 'url(' + imageUrl + ')');
                        $("#constitution-narration").html(`
                            <p>The laws seem to be far away from us, but this Article shows that Federalism and secession are both affected by Article VII. 
                            Each States tend to have their own political tendency, but in oeder to make any important national decision, Special state ratification conventions were necessary. To ratify the Constitution, it needs all nine states to participate. This article asserts the supremacy of the constitution over state laws.
                            </p>   
                        `)
                        break;
        
                case "paragraph97":
                        var imageUrl = "/img/Amendment7.jpeg"
                        $('body').css('background-image', 'url(' + imageUrl + ')');
                        $("#constitution-narration").html(`
                            <p>Relating to collage students, it helps ensure fairness in our justice system. Whoever is involved in a trial can perserve the right to go to the federal courts.
                            Civil jury trials can only take place in federal courts, according to the Seventh Amendment. Obiviously, nearly every other privileges are protected by the Bill of Rights, including the right to a criminal jury trial. 
                            </p>
                        `)
                        break;
                case "paragraph98":
                        var imageUrl = "/img/Amendment8.jpeg"
                        $('body').css('background-image', 'url(' + imageUrl + ')');
                        $("#constitution-narration").html(`
                            <p>In the contemporary society, human rights are viewed as one of th emost important thing. Therefore, this Amendment ensures that no one would be treated inhumanly nor curely, even this person comitted a crime. 
                            The Eighth Amendment provents the federal government from imposing  harsh penalties on criminals. Besides, this also prohibits any punishment on the criminanls after they are released.
                            These protections were not added until after the Constitution was ratified, which means that the Amendments are improving with time.
                            </p>
                         
                        `)
                        break;
                case "paragraph99":
                        var imageUrl = "/img/Amendment9.jpeg"
                        $('body').css('background-image', 'url(' + imageUrl + ')');
                        $("#constitution-narration").html(`
                            <p>This Amendment makes sure people to reserving all their rights in the future, asides from the listed rights. For collage students, they would feel safe and protected under this Amendment, which is benefiting their future.
                            The Ninth Amendment provides protections for individuals from the constitutional level, acting as a safety net. It claims that individuals have other fundamental rights, in addition to those listed in the First through Eighth Amendments. Some framers aroused concernes about the future interoperations of the Amendments, which would be risky to list a limited amount of Amendments. It was impossible to list every fundamental right. The existing amendments, for example, the right to free speech, the right to bear arms, and so forth, were not enough to include every single right of people. 
                            </p>
                        `)
                        break;
                case "paragraph100":
                        var imageUrl = "/img/Amendment10.jpeg"
                        $('body').css('background-image', 'url(' + imageUrl + ')');
                        $("#constitution-narration").html(`
                            <p>Collage students who might live all over the States can be informed that the fundemental rule of government. Whenever the states law and the federal law come to conflict, the Amendments would always be the priority.
                            The Tenth Amendment emphasizes that the bill of rights does not change the nature of the national government. A goverment has limited power under certein cercumstances, which would not operate every single aspect of the ordinary people.
                            </p>
                            
                        `)
                break;
                default:
                    var imageUrl = "/img/Welcome.jpg"
                    $('body').css('background-image', 'url(' + imageUrl + ')');
                    $("#constitution-narration").html(`
                        <p>${event.target.id}</p>
                        
                    `)
            } 
        });
    });
});
