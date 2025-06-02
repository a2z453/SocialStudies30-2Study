import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      <Head>
        <title>Social Studies 30-2 Comprehensive Study Guide</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3">
          <div className="nav-sidebar">
            <h3>Table of Contents</h3>
            <ul className="nav flex-column">
              <li className="nav-item"><a className="nav-link" href="#intro">Introduction</a></li>
              <li className="nav-item"><a className="nav-link" href="#liberalism">Liberalism</a></li>
              <li className="nav-item"><a className="nav-link" href="#ideologies">Ideologies</a></li>
              <li className="nav-item"><a className="nav-link" href="#cold-war">Cold War</a></li>
              <li className="nav-item"><a className="nav-link" href="#economic-systems">Economic Systems</a></li>
              <li className="nav-item"><a className="nav-link" href="#globalization">Globalization</a></li>
              <li className="nav-item"><a className="nav-link" href="#humanRights">Human Rights</a></li>
              <li className="nav-item"><a className="nav-link" href="#indigenous">Indigenous Perspectives</a></li>
              <li className="nav-item"><a className="nav-link" href="#environment">Environmental Ideologies</a></li>
              <li className="nav-item"><a className="nav-link" href="#source-analysis">Source Analysis</a></li>
              <li className="nav-item"><a className="nav-link" href="#exam-prep">Exam Preparation</a></li>
              <li className="nav-item"><a className="nav-link" href="#review">Review Questions</a></li>
              <li className="nav-item"><a className="nav-link" href="#assessments">Assessments</a></li>
            </ul>
          </div>
        </div>
        {/* Main Content */}
        <div className="col-md-9">
          {/* Section 1: Introduction */}
          <div className="section" id="intro">
            <h2>Introduction to Social Studies 30-2</h2>
            <p>Social Studies 30-2 focuses on understanding ideologies and their impact on the world. This course explores liberalism, alternative ideologies, and their roles in shaping political, economic, and social systems.</p>
            <p><strong>Key Themes:</strong></p>
            <ul>
              <li>Origins and impacts of liberalism.</li>
              <li>Competing ideologies: communism, fascism, socialism.</li>
              <li>Global issues: human rights, globalization, environment.</li>
              <li>Skills: source analysis, critical thinking, position papers.</li>
            </ul>
            <p>This guide provides summaries, activities, and practice questions to prepare for the Alberta Social Studies 30-2 diploma exam.</p>
          </div>
          {/* Section 2: Liberalism */}
          <div className="section" id="liberalism">
            <h2>Liberalism</h2>
            <h3>Core Principles</h3>
            <p>Liberalism emphasizes individual freedoms, equality, and democratic governance. It emerged during the Enlightenment (17th–18th centuries).</p>
            <ul>
              <li><strong>Individual Rights:</strong> Freedom of speech, religion, press.</li>
              <li><strong>Rule of Law:</strong> Equal treatment under the law.</li>
              <li><strong>Democracy:</strong> Citizen participation in governance.</li>
              <li><strong>Economic Freedom:</strong> Free markets, private property.</li>
            </ul>
            <h3>Historical Development</h3>
            <p>Key events:</p>
            <ul>
              <li><strong>Magna Carta (1215):</strong> Limited monarch’s power.</li>
              <li><strong>English Bill of Rights (1689):</strong> Established parliamentary supremacy.</li>
              <li><strong>American Revolution (1776):</strong> Promoted democratic ideals.</li>
              <li><strong>French Revolution (1789):</strong> Advanced equality, liberty.</li>
            </ul>
            <h3>Modern Liberalism</h3>
            <p>Balances individual freedoms with collective welfare (e.g., social programs). Examples: Canadian Charter of Rights and Freedoms, U.S. Constitution.</p>
          </div>
          {/* Section 3: Ideologies */}
          <div className="section" id="ideologies">
            <h2>Competing Ideologies</h2>
            <h3>Communism vs. Fascism</h3>
            <p>Drag and drop the characteristics to the correct ideology:</p>
            <div className="drag-drop">
              <div className="draggable" data-ideology="communism">Classless society</div>
              <div className="draggable" data-ideology="fascism">Extreme nationalism</div>
              <div className="draggable" data-ideology="communism">State-controlled economy</div>
              <div className="draggable" data-ideology="fascism">Suppression of dissent</div>
              <div className="dropzone" id="communism">Communism</div>
              <div className="dropzone" id="fascism">Fascism</div>
            </div>
            <h3>Socialism</h3>
            <p>Advocates collective ownership, wealth redistribution. Example: Nordic model (high taxes, social services).</p>
            <h3>Historical Examples</h3>
            <ul>
              <li><strong>Communism:</strong> Soviet Union (1917–1991), Mao’s China.</li>
              <li><strong>Fascism:</strong> Nazi Germany, Mussolini’s Italy.</li>
              <li><strong>Socialism:</strong> Post-WWII European welfare states.</li>
            </ul>
          </div>
          {/* Section 4: Cold War */}
          <div className="section" id="cold-war">
            <h2>The Cold War</h2>
            <p>A geopolitical conflict (1947–1991) between the U.S. (capitalism) and Soviet Union (communism).</p>
            <h3>Key Events</h3>
            <ul>
              <li><strong>Berlin Blockade (1948–1949):</strong> Soviet attempt to control West Berlin.</li>
              <li><strong>Korean War (1950–1953):</strong> Proxy war; North (communist) vs. South (capitalist).</li>
              <li><strong>Cuban Missile Crisis (1962):</strong> U.S.-Soviet nuclear standoff.</li>
              <li><strong>Fall of Berlin Wall (1989):</strong> Symbolized end of Cold War.</li>
            </ul>
            <h3>Alliances</h3>
            <p>Drag and drop the countries to the correct alliance:</p>
            <div className="drag-drop">
              <div className="draggable" data-alliance="nato">United States</div>
              <div className="draggable" data-alliance="warsaw">Soviet Union</div>
              <div className="draggable" data-alliance="nato">Canada</div>
              <div className="draggable" data-alliance="warsaw">East Germany</div>
              <div className="dropzone" id="nato">NATO</div>
              <div className="dropzone" id="warsaw">Warsaw Pact</div>
            </div>
          </div>
          {/* Section 5: Economic Systems */}
          <div className="section" id="economic-systems">
            <h2>Economic Systems</h2>
            <h3>Capitalism</h3>
            <p>Private ownership, free markets. Example: U.S. economy.</p>
            <h3>Command Economy</h3>
            <p>Government controls production. Example: Soviet Union.</p>
            <h3>Mixed Economy</h3>
            <p>Combines market and government roles. Example: Canada (healthcare, free markets).</p>
            <p><strong>Activity:</strong> Analyze the cartoon below to identify economic biases.</p>
            <Image src="/assets/labor-cartoon.png" alt="Labor Cartoon" width={400} height={300} />
          </div>
          {/* Section 6: Globalization */}
          <div className="section" id="globalization">
            <h2>Globalization</h2>
            <p>Interconnectedness of economies, cultures, and politics.</p>
            <h3>Pros</h3>
            <ul>
              <li>Increased trade, economic growth.</li>
              <li>Cultural exchange, technology transfer.</li>
            </ul>
            <h3>Cons</h3>
            <ul>
              <li>Job losses in developed nations.</li>
              <li>Cultural homogenization, inequality.</li>
            </ul>
            <p><strong>Data Analysis:</strong> Examine the graph below to assess globalization’s impact on income inequality.</p>
            <Image src="/assets/family-income-graph.png" alt="Family Income Graph" width={500} height={300} />
          </div>
          {/* Section 7: Human Rights */}
          <div className="section" id="humanRights">
            <h2>Human Rights</h2>
            <p>Universal entitlements (e.g., life, liberty, security).</p>
            <h3>Key Documents</h3>
            <ul>
              <li><strong>Universal Declaration of Human Rights (1948):</strong> UN framework.</li>
              <li><strong>Canadian Charter of Rights and Freedoms (1982):</strong> Protects individual rights.</li>
            </ul>
            <h3>Issues</h3>
            <ul>
              <li>Gender equality: Wage gaps, representation.</li>
              <li>Refugee rights: Asylum policies, displacement.</li>
            </ul>
          </div>
          {/* Section 8: Indigenous Perspectives */}
          <div className="section" id="indigenous">
            <h2>Indigenous Perspectives</h2>
            <p>Focuses on Indigenous experiences in Canada.</p>
            <h3>Key Issues</h3>
            <ul>
              <li><strong>Residential Schools:</strong> Cultural assimilation, intergenerational trauma.</li>
              <li><strong>Land Rights:</strong> Treaty disputes, resource development.</li>
              <li><strong>Truth and Reconciliation:</strong> Calls to Action (2015).</li>
            </ul>
            <p><strong>Activity:</strong> Read a residential school survivor’s account and reflect on its impact.</p>
          </div>
          {/* Section 9: Environmental Ideologies */}
          <div className="section" id="environment">
            <h2>Environmental Ideologies</h2>
            <p>Balancing economic growth and sustainability.</p>
            <h3>Perspectives</h3>
            <ul>
              <li><strong>Deep Ecology:</strong> Nature has intrinsic value.</li>
              <li><strong>Market Environmentalism:</strong> Free markets solve environmental issues.</li>
            </ul>
            <h3>Issues</h3>
            <ul>
              <li>Climate change: Carbon emissions, renewable energy.</li>
              <li>Resource extraction: Oil sands vs. Indigenous rights.</li>
            </ul>
          </div>
          {/* Section 10: Source Analysis */}
          <div className="section" id="source-analysis">
            <h2>Source Analysis</h2>
            <p>Skills for interpreting sources (cartoons, quotes, graphs).</p>
            <h3>Steps</h3>
            <ul>
              <li><strong>Identify:</strong> Source type, author, context.</li>
              <li><strong>Analyze:</strong> Bias, perspective, ideology.</li>
              <li><strong>Connect:</strong> Link to liberalism or other ideologies.</li>
            </ul>
            <p><strong>Practice:</strong> Analyze the following cartoon for bias.</p>
            <Image src="/assets/political-cartoon.png" alt="Political Cartoon" width={400} height={300} />
          </div>
                    {/* Section 11: Exam Preparation */}
          <div className="section" id="exam-prep">
            <h2>Exam Preparation</h2>
            <h3>Diploma Exam Structure</h3>
            <p>Social Studies 30-2 exam (Alberta):</p>
            <ul>
              <li><strong>Part A: Written Response</strong> Source analysis (3 sources: cartoon, quote, graph); position paper on ideological issue.</li>
              <li><strong>Part B: Multiple Choice</strong> 50–60 questions; tests knowledge, source interpretation.</li>
            </ul>
            <h3>Tips</h3>
            <ul>
              <li><strong>Source Analysis:</strong> Practice identifying bias, perspective; link to ideologies.</li>
              <li><strong>Position Paper:</strong> Clear thesis; use evidence (historical, contemporary); address counterarguments.</li>
              <li><strong>Multiple Choice:</strong> Focus on key terms, events; eliminate wrong answers.</li>
              <li><strong>Time Management:</strong> Part A (2–3 hours), Part B (1 hour).</li>
            </ul>
            <h3>Sample Position Paper Prompt</h3>
            <p><strong>Prompt:</strong> To what extent should individual rights be sacrificed for collective security?</p>
            <p><strong>Outline:</strong></p>
            <ul>
              <li><strong>Thesis:</strong> Individual rights should be balanced with collective security, as extreme sacrifices undermine liberalism.</li>
              <li><strong>Evidence:</strong> Patriot Act (2001) vs. Canadian Charter; WWII internment vs. modern surveillance.</li>
              <li><strong>Counterargument:</strong> Security prevents terrorism but risks authoritarianism.</li>
            </ul>
            <h3>Glossary</h3>
            <div className="glossary">
              <div className="glossary-item"><strong>Thesis:</strong> Main argument in an essay.</div>
              <div className="glossary-item"><strong>Counterargument:</strong> Opposing viewpoint addressed.</div>
              <div className="glossary-item"><strong>Source Interpretation:</strong> Analyzing documents for meaning.</div>
            </div>
          </div>
          {/* Section 12: Review Questions */}
          <div className="section" id="review">
            <h2>Review Questions</h2>
            <p>Test your knowledge with these questions, covering all Social Studies 30-2 topics.</p>
            <form id="quizForm">
              <div className="question">
                <p><strong>1. Which principle of liberalism ensures equal treatment under the law?</strong></p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" value="A" />
                  <label className="form-check-label">A. Rule of Law</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" value="B" />
                  <label className="form-check-label">B. Economic Freedom</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q1" value="C" />
                  <label className="form-check-label">C. Collective Ownership</label>
                </div>
              </div>
              <div className="question">
                <p><strong>2. Which Cold War event involved a US blockade of Cuba?</strong></p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" value="A" />
                  <label className="form-check-label">A. Bay of Pigs</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" value="B" />
                  <label className="form-check-label">B. Cuban Missile Crisis</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q2" value="C" />
                  <label className="form-check-label">C. U-2 Crisis</label>
                </div>
              </div>
              <div className="question">
                <p><strong>3. What economic system combines market and government roles?</strong></p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" value="A" />
                  <label className="form-check-label">A. Command Economy</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" value="B" />
                  <label className="form-check-label">B. Free Market Economy</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q3" value="C" />
                  <label className="form-check-label">C. Mixed Economy</label>
                </div>
              </div>
              <div className="question">
                <p><strong>4. What was a major consequence of the Treaty of Versailles?</strong></p>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q4" value="A" />
                  <label className="form-check-label">A. German economic prosperity</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q4" value="B" />
                  <label className="form-check-label">B. Hyperinflation and resentment</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="q4" value="C" />
                  <label className="form-check-label">C. Strengthened Weimar democracy</label>
                </div>
              </div>
              <div className="question">
                <p><strong>5. Short Answer: How does globalization impact cultural diversity?</strong></p>
                <textarea className="form-control" name="q5" rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" id="submitQuiz">Submit Quiz</button>
            </form>
            <div id="quizFeedback" className="quiz-feedback mt-3"></div>
          </div>
          {/* Section 13: Assessments */}
          <div className="section" id="assessments">
            <h2>Assessments</h2>
            <p>Test your knowledge with these randomized quizzes, covering key Social Studies 30-2 curriculum topics. Use the accordion below to expand each assessment and click 'Grade Quiz' to check your score.</p>
            {/* Quiz 1: Foundations of Ideologies */}
            <div className="accordion" id="quizAccordion1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Quiz 1: Foundations of Ideologies (20 Questions)
                  </button>
                </h2>
                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#quizAccordion1">
                  <div className="accordion-body">
                    <p>This quiz covers the principles and historical development of liberalism and its foundational role in ideologies.</p>
                    <form id="quiz1Form">
                      <ol>
                        <li>Which Enlightenment thinker advocated for the separation of powers in government?<br />
                          <input type="radio" name="q1" value="A" /> A) John Locke<br />
                          <input type="radio" name="q1" value="B" /> B) Montesquieu<br />
                          <input type="radio" name="q1" value="C" /> C) Rousseau<br />
                          <input type="radio" name="q1" value="D" /> D) Voltaire<br />
                        </li>
                        <li>What principle of liberalism emphasizes individual freedoms like speech and religion?<br />
                          <input type="radio" name="q2" value="A" /> A) Rule of Law<br />
                          <input type="radio" name="q2" value="B" /> B) Individual Rights<br />
                          <input type="radio" name="q2" value="C" /> C) Economic Freedom<br />
                          <input type="radio" name="q2" value="D" /> D) Collective Security<br />
                        </li>
                        <li>Which historical event limited the power of the English monarchy in 1215?<br />
                          <input type="radio" name="q3" value="A" /> A) English Bill of Rights<br />
                          <input type="radio" name="q3" value="B" /> B) Magna Carta<br />
                          <input type="radio" name="q3" value="C" /> C) Glorious Revolution<br />
                          <input type="radio" name="q3" value="D" /> D) American Revolution<br />
                        </li>
                        <li>What document (1689) established parliamentary supremacy in England?<br />
                          <input type="radio" name="q4" value="A" /> A) Magna Carta<br />
                          <input type="radio" name="q4" value="B" /> B) English Bill of Rights<br />
                          <input type="radio" name="q4" value="C" /> C) Petition of Right<br />
                          <input type="radio" name="q4" value="D" /> D) Declaration of Independence<br />
                        </li>
                        <li>Which revolution promoted the ideals of liberty and equality in 1789?<br />
                          <input type="radio" name="q5" value="A" /> A) American Revolution<br />
                          <input type="radio" name="q5" value="B" /> B) French Revolution<br />
                          <input type="radio" name="q5" value="C" /> C) Russian Revolution<br />
                          <input type="radio" name="q5" value="D" /> D) Industrial Revolution<br />
                        </li>
                        <li>Modern liberalism balances individual freedoms with what?<br />
                          <input type="radio" name="q6" value="A" /> A) Authoritarian control<br />
                          <input type="radio" name="q6" value="B" /> B) Collective welfare<br />
                          <input type="radio" name="q6" value="C" /> C) Military expansion<br />
                          <input type="radio" name="q6" value="D" /> D) Religious doctrine<br />
                        </li>
                        <li>Which Canadian document protects individual rights and freedoms?<br />
                          <input type="radio" name="q7" value="A" /> A) Constitution Act, 1867<br />
                          <input type="radio" name="q7" value="B" /> B) Canadian Charter of Rights and Freedoms<br />
                          <input type="radio" name="q7" value="C" /> C) British North America Act<br />
                          <input type="radio" name="q7" value="D" /> D) Indian Act<br />
                        </li>
                        <li>John Locke’s idea of a social contract emphasizes what?<br />
                          <input type="radio" name="q8" value="A" /> A) Absolute monarchy<br />
                          <input type="radio" name="q8" value="B" /> B) Consent of the governed<br />
                          <input type="radio" name="q8" value="C" /> C) Divine right<br />
                          <input type="radio" name="q8" value="D" /> D) Military rule<br />
                        </li>
                        <li>What is a key feature of classical liberalism?<br />
                          <input type="radio" name="q9" value="A" /> A) Government intervention in the economy<br />
                          <input type="radio" name="q9" value="B" /> B) Laissez-faire economics<br />
                          <input type="radio" name="q9" value="C" /> C) Collective ownership<br />
                          <input type="radio" name="q9" value="D" /> D) State-controlled media<br />
                        </li>
                        <li>Which event symbolized the spread of democratic ideals in 1776?<br />
                          <input type="radio" name="q10" value="A" /> A) French Revolution<br />
                          <input type="radio" name="q10" value="B" /> B) American Revolution<br />
                          <input type="radio" name="q10" value="C" /> C) English Civil War<br />
                          <input type="radio" name="q10" value="D" /> D) Glorious Revolution<br />
                        </li>
                        <li>What does the rule of law ensure in a liberal democracy?<br />
                          <input type="radio" name="q11" value="A" /> A) Economic equality<br />
                          <input type="radio" name="q11" value="B" /> B) Equal treatment under the law<br />
                          <input type="radio" name="q11" value="C" /> C) Military supremacy<br />
                          <input type="radio" name="q11" value="D" /> D) Religious dominance<br />
                        </li>
                        <li>Which philosopher argued for the protection of natural rights (life, liberty, property)?<br />
                          <input type="radio" name="q12" value="A" /> A) Rousseau<br />
                          <input type="radio" name="q12" value="B" /> B) John Locke<br />
                          <input type="radio" name="q12" value="C" /> C) Hobbes<br />
                          <input type="radio" name="q12" value="D" /> D) Marx<br />
                        </li>
                        <li>The Enlightenment emphasized what approach to knowledge?<br />
                          <input type="radio" name="q13" value="A" /> A) Faith-based reasoning<br />
                          <input type="radio" name="q13" value="B" /> B) Scientific inquiry<br />
                          <input type="radio" name="q13" value="C" /> C) Monarchial authority<br />
                          <input type="radio" name="q13" value="D" /> D) Collective tradition<br />
                        </li>
                        <li>Which principle allows citizens to participate in governance?<br />
                          <input type="radio" name="q14" value="A" /> A) Economic Freedom<br />
                          <input type="radio" name="q14" value="B" /> B) Democracy<br />
                          <input type="radio" name="q14" value="C" /> C) Authoritarianism<br />
                          <input type="radio" name="q14" value="D" /> D) Collectivism<br />
                        </li>
                        <li>What was a key outcome of the Glorious Revolution (1688)?<br />
                          <input type="radio" name="q15" value="A" /> A) Absolute monarchy<br />
                          <input type="radio" name="q15" value="B" /> B) Constitutional monarchy<br />
                          <input type="radio" name="q15" value="C" /> C) Communist state<br />
                          <input type="radio" name="q15" value="D" /> D) Military dictatorship<br />
                        </li>
                        <li>Which document is an example of modern liberalism in Canada?<br />
                          <input type="radio" name="q16" value="A" /> A) Indian Act<br />
                          <input type="radio" name="q16" value="B" /> B) Canadian Charter of Rights and Freedoms<br />
                          <input type="radio" name="q16" value="C" /> C) War Measures Act<br />
                          <input type="radio" name="q16" value="D" /> D) Statute of Westminster<br />
                        </li>
                        <li>What economic system aligns with classical liberalism?<br />
                          <input type="radio" name="q17" value="A" /> A) Command economy<br />
                          <input type="radio" name="q17" value="B" /> B) Free market economy<br />
                          <input type="radio" name="q17" value="C" /> C) Mixed economy<br />
                          <input type="radio" name="q17" value="D" /> D) Socialist economy<br />
                        </li>
                        <li>Which event challenged absolute monarchy in France?<br />
                          <input type="radio" name="q18" value="A" /> A) French Revolution<br />
                          <input type="radio" name="q18" value="B" /> B) American Revolution<br />
                          <input type="radio" name="q18" value="C" /> C) Russian Revolution<br />
                          <input type="radio" name="q18" value="D" /> D) Industrial Revolution<br />
                        </li>
                        <li>What is a key feature of a liberal democracy?<br />
                          <input type="radio" name="q19" value="A" /> A) Single-party rule<br />
                          <input type="radio" name="q19" value="B" /> B) Free and fair elections<br />
                          <input type="radio" name="q19" value="C" /> C) State-controlled media<br />
                          <input type="radio" name="q19" value="D" /> D) Military governance<br />
                        </li>
                        <li>Which thinker influenced the idea of the general will?<br />
                          <input type="radio" name="q20" value="A" /> A) John Locke<br />
                          <input type="radio" name="q20" value="B" /> B) Rousseau<br />
                          <input type="radio" name="q20" value="C" /> C) Montesquieu<br />
                          <input type="radio" name="q20" value="D" /> D) Voltaire<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz1Form', 'quiz1Feedback', ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz1Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 2: Competing Ideologies */}
            <div className="accordion" id="quizAccordion2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Quiz 2: Competing Ideologies (20 Questions)
                  </button>
                </h2>
                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#quizAccordion2">
                  <div className="accordion-body">
                    <p>This quiz tests your knowledge of communism, fascism, socialism, and their historical applications.</p>
                    <form id="quiz2Form">
                      <ol>
                        <li>Which ideology advocates a classless society with state-controlled production?<br />
                          <input type="radio" name="q1" value="A" /> A) Fascism<br />
                          <input type="radio" name="q1" value="B" /> B) Communism<br />
                          <input type="radio" name="q1" value="C" /> C) Socialism<br />
                          <input type="radio" name="q1" value="D" /> D) Liberalism<br />
                        </li>
                        <li>What is a key feature of fascism?<br />
                          <input type="radio" name="q2" value="A" /> A) Economic equality<br />
                          <input type="radio" name="q2" value="B" /> B) Extreme nationalism<br />
                          <input type="radio" name="q2" value="C" /> C) Individual freedoms<br />
                          <input type="radio" name="q2" value="D" /> D) Collective welfare<br />
                        </li>
                        <li>Which country was led by a fascist regime under Mussolini?<br />
                          <input type="radio" name="q3" value="A" /> A) Germany<br />
                          <input type="radio" name="q3" value="B" /> B) Italy<br />
                          <input type="radio" name="q3" value="C" /> C) Soviet Union<br />
                          <input type="radio" name="q3" value="D" /> D) China<br />
                        </li>
                        <li>Socialism emphasizes what type of ownership?<br />
                          <input type="radio" name="q4" value="A" /> A) Private ownership<br />
                          <input type="radio" name="q4" value="B" /> B) Collective ownership<br />
                          <input type="radio" name="q4" value="C" /> C) Monarchial ownership<br />
                          <input type="radio" name="q4" value="D" /> D) Corporate ownership<br />
                        </li>
                        <li>Which leader is associated with communism in the Soviet Union (1917–1991)?<br />
                          <input type="radio" name="q5" value="A" /> A) Lenin<br />
                          <input type="radio" name="q5" value="B" /> B) Hitler<br />
                          <input type="radio" name="q5" value="C" /> C) Mussolini<br />
                          <input type="radio" name="q5" value="D" /> D) Franco<br />
                        </li>
                        <li>What is a characteristic of a communist economy?<br />
                          <input type="radio" name="q6" value="A" /> A) Free market competition<br />
                          <input type="radio" name="q6" value="B" /> B) State-controlled production<br />
                          <input type="radio" name="q6" value="C" /> C) Private property rights<br />
                          <input type="radio" name="q6" value="D" /> D) Laissez-faire policies<br />
                        </li>
                        <li>Which ideology suppresses dissent and promotes a single leader?<br />
                          <input type="radio" name="q7" value="A" /> A) Socialism<br />
                          <input type="radio" name="q7" value="B" /> B) Fascism<br />
                          <input type="radio" name="q7" value="C" /> C) Liberalism<br />
                          <input type="radio" name="q7" value="D" /> D) Communism<br />
                        </li>
                        <li>The Nordic model is an example of which ideology?<br />
                          <input type="radio" name="q8" value="A" /> A) Fascism<br />
                          <input type="radio" name="q8" value="B" /> B) Socialism<br />
                          <input type="radio" name="q8" value="C" /> C) Communism<br />
                          <input type="radio" name="q8" value="D" /> D) Liberalism<br />
                        </li>
                        <li>Which event marked the rise of communism in China?<br />
                          <input type="radio" name="q9" value="A" /> A) Russian Revolution<br />
                          <input type="radio" name="q9" value="B" /> B) Chinese Communist Revolution<br />
                          <input type="radio" name="q9" value="C" /> C) Cuban Revolution<br />
                          <input type="radio" name="q9" value="D" /> D) French Revolution<br />
                        </li>
                        <li>What was a key feature of Nazi Germany’s ideology?<br />
                          <input type="radio" name="q10" value="A" /> A) Classless society<br />
                          <input type="radio" name="q10" value="B" /> B) Racial superiority<br />
                          <input type="radio" name="q10" value="C" /> C) Economic freedom<br />
                          <input type="radio" name="q10" value="D" /> D) Democratic elections<br />
                        </li>
                        <li>Which ideology rejects private property in favor of collective control?<br />
                          <input type="radio" name="q11" value="A" /> A) Liberalism<br />
                          <input type="radio" name="q11" value="B" /> B) Communism<br />
                          <input type="radio" name="q11" value="C" /> C) Fascism<br />
                          <input type="radio" name="q11" value="D" /> D) Capitalism<br />
                        </li>
                        <li>Which leader promoted fascism in Germany?<br />
                          <input type="radio" name="q12" value="A" /> A) Stalin<br />
                          <input type="radio" name="q12" value="B" /> B) Hitler<br />
                          <input type="radio" name="q12" value="C" /> C) Mao<br />
                          <input type="radio" name="q12" value="D" /> D) Lenin<br />
                        </li>
                        <li>Socialism often includes what type of economic system?<br />
                          <input type="radio" name="q13" value="A" /> A) Free market<br />
                          <input type="radio" name="q13" value="B" /> B) Mixed economy<br />
                          <input type="radio" name="q13" value="C" /> C) Command economy<br />
                          <input type="radio" name="q13" value="D" /> D) Traditional economy<br />
                        </li>
                        <li>Which ideology was implemented in Cuba under Fidel Castro?<br />
                          <input type="radio" name="q14" value="A" /> A) Fascism<br />
                          <input type="radio" name="q14" value="B" /> B) Communism<br />
                          <input type="radio" name="q14" value="C" /> C) Liberalism<br />
                          <input type="radio" name="q14" value="D" /> D) Socialism<br />
                        </li>
                        <li>What was a consequence of fascist policies in WWII?<br />
                          <input type="radio" name="q15" value="A" /> A) Economic equality<br />
                          <input type="radio" name="q15" value="B" /> B) Human rights abuses<br />
                          <input type="radio" name="q15" value="C" /> C) Democratic reforms<br />
                          <input type="radio" name="q15" value="D" /> D) Global cooperation<br />
                        </li>
                        <li>Which thinker developed the foundational ideas of communism?<br />
                          <input type="radio" name="q16" value="A" /> A) Karl Marx<br />
                          <input type="radio" name="q16" value="B" /> B) John Locke<br />
                          <input type="radio" name="q16" value="C" /> C) Adam Smith<br />
                          <input type="radio" name="q16" value="D" /> D) Montesquieu<br />
                        </li>
                        <li>Which ideology prioritizes national unity over individual rights?<br />
                          <input type="radio" name="q17" value="A" /> A) Liberalism<br />
                          <input type="radio" name="q17" value="B" /> B) Fascism<br />
                          <input type="radio" name="q17" value="C" /> C) Socialism<br />
                          <input type="radio" name="q17" value="D" /> D) Communism<br />
                        </li>
                        <li>The Soviet Union’s economy under Stalin was an example of?<br />
                          <input type="radio" name="q18" value="A" /> A) Free market economy<br />
                          <input type="radio" name="q18" value="B" /> B) Command economy<br />
                          <input type="radio" name="q18" value="C" /> C) Mixed economy<br />
                          <input type="radio" name="q18" value="D" /> D) Capitalist economy<br />
                        </li>
                        <li>Which ideology supports high taxes and social services for redistribution?<br />
                          SOCIAL studies</li>
                          <li>Which ideology supports high taxes and social services for redistribution?<br />
                          <input type="radio" name="q19" value="A" /> A) Fascism<br />
                          <input type="radio" name="q19" value="B" /> B) Socialism<br />
                          <input type="radio" name="q19" value="C" /> C) Liberalism<br />
                          <input type="radio" name="q19" value="D" /> D) Communism<br />
                        </li>
                        <li>Which event led to the spread of socialist policies in post-WWII Europe?<br />
                          <input type="radio" name="q20" value="A" /> A) Cold War<br />
                          <input type="radio" name="q20" value="B" /> B) Great Depression<br />
                          <input type="radio" name="q20" value="C" /> C) Reconstruction era<br />
                          <input type="radio" name="q20" value="D" /> D) Industrial Revolution<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz2Form', 'quiz2Feedback', ['B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'C'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz2Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 3: Cold War and Economic Systems */}
            <div className="accordion" id="quizAccordion3">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Quiz 3: Cold War and Economic Systems (20 Questions)
                  </button>
                </h2>
                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#quizAccordion3">
                  <div className="accordion-body">
                    <p>This quiz covers the Cold War conflict and economic systems like capitalism, command, and mixed economies.</p>
                    <form id="quiz3Form">
                      <ol>
                        <li>What was the primary ideological conflict of the Cold War (1947–1991)?<br />
                          <input type="radio" name="q1" value="A" /> A) Capitalism vs. socialism<br />
                          <input type="radio" name="q1" value="B" /> B) Capitalism vs. communism<br />
                          <input type="radio" name="q1" value="C" /> C) Fascism vs. liberalism<br />
                          <input type="radio" name="q1" value="D" /> D) Socialism vs. fascism<br />
                        </li>
                        <li>Which event involved a Soviet attempt to control West Berlin (1948–1949)?<br />
                          <input type="radio" name="q2" value="A" /> A) Cuban Missile Crisis<br />
                          <input type="radio" name="q2" value="B" /> B) Berlin Blockade<br />
                          <input type="radio" name="q2" value="C" /> C) Korean War<br />
                          <input type="radio" name="q2" value="D" /> D) Vietnam War<br />
                        </li>
                        <li>Which alliance was led by the United States during the Cold War?<br />
                          <input type="radio" name="q3" value="A" /> A) Warsaw Pact<br />
                          <input type="radio" name="q3" value="B" /> B) NATO<br />
                          <input type="radio" name="q3" value="C" /> C) SEATO<br />
                          <input type="radio" name="q3" value="D" /> D) Non-Aligned Movement<br />
                        </li>
                        <li>What was the outcome of the Cuban Missile Crisis (1962)?<br />
                          <input type="radio" name="q4" value="A" /> A) Nuclear war<br />
                          <input type="radio" name="q4" value="B" /> B) Soviet missile withdrawal<br />
                          <input type="radio" name="q4" value="C" /> C) U.S. invasion of Cuba<br />
                          <input type="radio" name="q4" value="D" /> D) Soviet occupation of Cuba<br />
                        </li>
                        <li>Which war (1950–1953) was a proxy conflict between the U.S. and Soviet Union?<br />
                          <input type="radio" name="q5" value="A" /> A) Vietnam War<br />
                          <input type="radio" name="q5" value="B" /> B) Korean War<br />
                          <input type="radio" name="q5" value="C" /> C) Afghan War<br />
                          <input type="radio" name="q5" value="D" /> D) Gulf War<br />
                        </li>
                        <li>What economic system relies on private ownership and free markets?<br />
                          <input type="radio" name="q6" value="A" /> A) Command economy<br />
                          <input type="radio" name="q6" value="B" /> B) Capitalism<br />
                          <input type="radio" name="q6" value="C" /> C) Mixed economy<br />
                          <input type="radio" name="q6" value="D" /> D) Socialism<br />
                        </li>
                        <li>Which country is an example of a command economy during the Cold War?<br />
                          <input type="radio" name="q7" value="A" /> A) United States<br />
                          <input type="radio" name="q7" value="B" /> B) Soviet Union<br />
                          <input type="radio" name="q7" value="C" /> C) Canada<br />
                          <input type="radio" name="q7" value="D" /> D) United Kingdom<br />
                        </li>
                        <li>What is a key feature of a mixed economy?<br />
                          <input type="radio" name="q8" value="A" /> A) Complete government control<br />
                          <input type="radio" name="q8" value="B" /> B) Combination of market and government roles<br />
                          <input type="radio" name="q8" value="C" /> C) No private ownership<br />
                          <input type="radio" name="q8" value="D" /> D) No government intervention<br />
                        </li>
                        <li>Which event symbolized the end of the Cold War in 1989?<br />
                          <input type="radio" name="q9" value="A" /> A) Fall of the Berlin Wall<br />
                          <input type="radio" name="q9" value="B" /> B) Cuban Revolution<br />
                          <input type="radio" name="q9" value="C" /> C) Korean War<br />
                          <input type="radio" name="q9" value="D" /> D) Vietnam War<br />
                        </li>
                        <li>Which country has a mixed economy with universal healthcare?<br />
                          <input type="radio" name="q10" value="A" /> A) Soviet Union<br />
                          <input type="radio" name="q10" value="B" /> B) Canada<br />
                          <input type="radio" name="q10" value="C" /> C) Cuba<br />
                          <input type="radio" name="q10" value="D" /> D) North Korea<br />
                        </li>
                        <li>What was the purpose of the Marshall Plan (1948)?<br />
                          <input type="radio" name="q11" value="A" /> A) Rebuild Western Europe<br />
                          <input type="radio" name="q11" value="B" /> B) Support Soviet expansion<br />
                          <input type="radio" name="q11" value="C" /> C) Fund the Korean War<br />
                          <input type="radio" name="q11" value="D" /> D) Establish the United Nations<br />
                        </li>
                        <li>Which leader was associated with the U.S. during the Cuban Missile Crisis?<br />
                          <input type="radio" name="q12" value="A" /> A) Eisenhower<br />
                          <input type="radio" name="q12" value="B" /> B) Kennedy<br />
                          <input type="radio" name="q12" value="C" /> C) Nixon<br />
                          <input type="radio" name="q12" value="D" /> D) Truman<br />
                        </li>
                        <li>What was the Soviet Union’s military alliance during the Cold War?<br />
                          <input type="radio" name="q13" value="A" /> A) NATO<br />
                          <input type="radio" name="q13" value="B" /> B) Warsaw Pact<br />
                          <input type="radio" name="q13" value="C" /> C) SEATO<br />
                          <input type="radio" name="q13" value="D" /> D) OPEC<br />
                        </li>
                        <li>Which economic system promotes consumer choice through supply and demand?<br />
                          <input type="radio" name="q14" value="A" /> A) Command economy<br />
                          <input type="radio" name="q14" value="B" /> B) Capitalism<br />
                          <input type="radio" name="q14" value="C" /> C) Socialism<br />
                          <input type="radio" name="q14" value="D" /> D) Mixed economy<br />
                        </li>
                        <li>What was a key feature of the arms race during the Cold War?<br />
                          <input type="radio" name="q15" value="A" /> A) Economic cooperation<br />
                          <input type="radio" name="q15" value="B" /> B) Nuclear weapons development<br />
                          <input type="radio" name="q15" value="C" /> C) Cultural exchange<br />
                          <input type="radio" name="q15" value="D" /> D) Trade agreements<br />
                        </li>
                        <li>Which country was divided into North and South during the Cold War?<br />
                          <input type="radio" name="q16" value="A" /> A) Germany<br />
                          <input type="radio" name="q16" value="B" /> B) Korea<br />
                          <input type="radio" name="q16" value="C" /> C) Vietnam<br />
                          <input type="radio" name="q16" value="D" /> D) Cuba<br />
                        </li>
                        <li>What economic system was used in the United States during the Cold War?<br />
                          <input type="radio" name="q17" value="A" /> A) Command economy<br />
                          <input type="radio" name="q17" value="B" /> B) Capitalism<br />
                          <input type="radio" name="q17" value="C" /> C) Socialism<br />
                          <input type="radio" name="q17" value="D" /> D) Mixed economy<br />
                        </li>
                        <li>Which Cold War event involved a U.S. spy plane incident in 1960?<br />
                          <input type="radio" name="q18" value="A" /> A) U-2 Crisis<br />
                          <input type="radio" name="q18" value="B" /> B) Cuban Missile Crisis<br />
                          <input type="radio" name="q18" value="C" /> C) Berlin Airlift<br />
                          <input type="radio" name="q18" value="D" /> D) Korean War<br />
                        </li>
                        <li>What was the purpose of the Truman Doctrine (1947)?<br />
                          <input type="radio" name="q19" value="A" /> A) Promote global trade<br />
                          <input type="radio" name="q19" value="B" /> B) Contain communism<br />
                          <input type="radio" name="q19" value="C" /> C) Rebuild Japan<br />
                          <input type="radio" name="q19" value="D" /> D) Establish the United Nations<br />
                        </li>
                        <li>Which economic system allows government to regulate industries for public welfare?<br />
                          <input type="radio" name="q20" value="A" /> A) Capitalism<br />
                          <input type="radio" name="q20" value="B" /> B) Mixed economy<br />
                          <input type="radio" name="q20" value="C" /> C) Command economy<br />
                          <input type="radio" name="q20" value="D" /> D) Socialism<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz3Form', 'quiz3Feedback', ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz3Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 4: Globalization and Human Rights */}
            <div className="accordion" id="quizAccordion4">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Quiz 4: Globalization and Human Rights (20 Questions)
                  </button>
                </h2>
                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#quizAccordion4">
                  <div className="accordion-body">
                    <p>This quiz covers the effects of globalization and the principles of human rights.</p>
                    <form id="quiz4Form">
                      <ol>
                        <li>What is globalization?<br />
                          <input type="radio" name="q1" value="A" /> A) Economic isolation<br />
                          <input type="radio" name="q1" value="B" /> B) Global interconnectedness<br />
                          <input type="radio" name="q1" value="C" /> C) National sovereignty<br />
                          <input type="radio" name="q1" value="D" /> D) Cultural preservation<br />
                        </li>
                        <li>What is one benefit of globalization?<br />
                          <input type="radio" name="q2" value="A" /> A) Increased inequality<br />
                          <input type="radio" name="q2" value="B" /> B) Economic growth<br />
                          <input type="radio" name="q2" value="C" /> C) Job losses<br />
                          <input type="radio" name="q2" value="D" /> D) Cultural homogenization<br />
                        </li>
                        <li>What is a negative impact of globalization on developing countries?<br />
                          <input type="radio" name="q3" value="A" /> A) Increased trade<br />
                          <input type="radio" name="q3" value="B" /> B) Income inequality<br />
                          <input type="radio" name="q3" value="C" /> C) Technological advancement<br />
                          <input type="radio" name="q3" value="D" /> D) Cultural exchange<br />
                        </li>
                        <li>Which organization promotes international trade?<br />
                          <input type="radio" name="q4" value="A" /> A) United Nations<br />
                          <input type="radio" name="q4" value="B" /> B) World Trade Organization<br />
                          <input type="radio" name="q4" value="C" /> C) International Monetary Fund<br />
                          <input type="radio" name="q4" value="D" /> D) World Bank<br />
                        </li>
                        <li>What is the Universal Declaration of Human Rights (1948)?<br />
                          <input type="radio" name="q5" value="A" /> A) A trade agreement<br />
                          <input type="radio" name="q5" value="B" /> B) A UN framework for rights<br />
                          <input type="radio" name="q5" value="C" /> C) A military treaty<br />
                          <input type="radio" name="q5" value="D" /> D) A climate policy<br />
                        </li>
                        <li>Which Canadian document aligns with human rights principles?<br />
                          <input type="radio" name="q6" value="A" /> A) Indian Act<br />
                          <input type="radio" name="q6" value="B" /> B) Canadian Charter of Rights and Freedoms<br />
                          <input type="radio" name="q6" value="C" /> C) War Measures Act<br />
                          <input type="radio" name="q6" value="D" /> D) Constitution Act, 1867<br />
                        </li>
                        <li>What is a key human right issue globally?<br />
                          <input type="radio" name="q7" value="A" /> A) Economic growth<br />
                          <input type="radio" name="q7" value="B" /> B) Gender equality<br />
                          <input type="radio" name="q7" value="C" /> C) Military expansion<br />
                          <input type="radio" name="q7" value="D" /> D) Cultural preservation<br />
                        </li>
                        <li>Globalization can lead to what cultural impact?<br />
                          <input type="radio" name="q8" value="A" /> A) Cultural diversity<br />
                          <input type="radio" name="q8" value="B" /> B) Cultural homogenization<br />
                          <input type="radio" name="q8" value="C" /> C) Economic isolation<br />
                          <input type="radio" name="q8" value="D" /> D) Political stability<br />
                          </li>
                        <li>Which group is often affected by globalization’s labor practices?<br />
                          <input type="radio" name="q9" value="A" /> A) Corporate executives<br />
                          <input type="radio" name="q9" value="B" /> B) Factory workers<br />
                          <input type="radio" name="q9" value="C" /> C) Politicians<br />
                          <input type="radio" name="q9" value="D" /> D) Scientists<br />
                        </li>
                        <li>What is a goal of human rights advocacy?<br />
                          <input type="radio" name="q10" value="A" /> A) Economic dominance<br />
                          <input type="radio" name="q10" value="B" /> B) Protect individual dignity<br />
                          <input type="radio" name="q10" value="C" /> C) Military expansion<br />
                          <input type="radio" name="q10" value="D" /> D) Cultural isolation<br />
                        </li>
                        <li>Which issue is associated with globalization’s environmental impact?<br />
                          <input type="radio" name="q11" value="A" /> A) Resource conservation<br />
                          <input type="radio" name="q11" value="B" /> B) Deforestation increase<br />
                          <input type="radio" name="q11" value="C" /> C) Cultural preservation<br />
                          <input type="radio" name="q11" value="D" /> D) Political stability<br />
                        </li>
                        <li>Which right is protected by the Canadian Charter of Rights and Freedoms?<br />
                          <input type="radio" name="q12" value="A" /> A) Right to bear arms<br />
                          <input type="radio" name="q12" value="B" /> B) Freedom of expression<br />
                          <input type="radio" name="q12" value="C" /> C) Right to property<br />
                          <input type="radio" name="q12" value="D" /> D) Right to military service<br />
                        </li>
                        <li>Globalization has increased the influence of which entities?<br />
                          <input type="radio" name="q13" value="A" /> A) Local governments<br />
                          <input type="radio" name="q13" value="B" /> B) Multinational corporations<br />
                          <input type="radio" name="q13" value="C" /> C) Indigenous communities<br />
                          <input type="radio" name="q13" value="D" /> D) Small businesses<br />
                        </li>
                        <li>What is a challenge for refugees under human rights frameworks?<br />
                          <input type="radio" name="q14" value="A" /> A) Economic prosperity<br />
                          <input type="radio" name="q14" value="B" /> B) Access to asylum<br />
                          <input type="radio" name="q14" value="C" /> C) Cultural dominance<br />
                          <input type="radio" name="q14" value="D" /> D) Military support<br />
                        </li>
                        <li>Which organization monitors human rights abuses globally?<br />
                          <input type="radio" name="q15" value="A" /> A) World Trade Organization<br />
                          <input type="radio" name="q15" value="B" /> B) Amnesty International<br />
                          <input type="radio" name="q15" value="C" /> C) International Monetary Fund<br />
                          <input type="radio" name="q15" value="D" /> D) World Bank<br />
                        </li>
                        <li>Globalization can exacerbate what economic issue?<br />
                          <input type="radio" name="q16" value="A" /> A) Economic equality<br />
                          <input type="radio" name="q16" value="B" /> B) Income disparity<br />
                          <input type="radio" name="q16" value="C" /> C) Cultural preservation<br />
                          <input type="radio" name="q16" value="D" /> D) Political stability<br />
                        </li>
                        <li>Which human right ensures access to education?<br />
                          <input type="radio" name="q17" value="A" /> A) Right to property<br />
                          <input type="radio" name="q17" value="B" /> B) Right to education<br />
                          <input type="radio" name="q17" value="C" /> C) Right to bear arms<br />
                          <input type="radio" name="q17" value="D" /> D) Right to military service<br />
                        </li>
                        <li>What is a social impact of globalization?<br />
                          <input type="radio" name="q18" value="A" /> A) Increased isolation<br />
                          <input type="radio" name="q18" value="B" /> B) Cultural exchange<br />
                          <input type="radio" name="q18" value="C" /> C) Economic stagnation<br />
                          <input type="radio" name="q18" value="D" /> D) Political oppression<br />
                        </li>
                        <li>Which document outlines global human rights standards?<br />
                          <input type="radio" name="q19" value="A" /> A) Kyoto Protocol<br />
                          <input type="radio" name="q19" value="B" /> B) Universal Declaration of Human Rights<br />
                          <input type="radio" name="q19" value="C" /> C) Paris Agreement<br />
                          <input type="radio" name="q19" value="D" /> D) Geneva Conventions<br />
                        </li>
                        <li>Globalization often leads to the spread of what?<br />
                          <input type="radio" name="q20" value="A" /> A) Local traditions<br />
                          <input type="radio" name="q20" value="B" /> B) Western culture<br />
                          <input type="radio" name="q20" value="C" /> C) Economic isolation<br />
                          <input type="radio" name="q20" value="D" /> D) Political oppression<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz4Form', 'quiz4Feedback', ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz4Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 5: Indigenous Perspectives and Environmental Ideologies */}
            <div className="accordion" id="quizAccordion5">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
Quiz 5: Indigenous Perspectives and Environmental Ideologies (20 Questions)
                  </button>
                </h2>
                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#quizAccordion5">
                  <div className="accordion-body">
                    <p>This quiz covers Indigenous issues in Canada, environmental ideologies, and source analysis skills, aligned with Social Studies 30-2.</p>
                    <form id="quiz5Form">
                      <ol>
                        <li>What was the primary goal of residential schools in Canada?<br />
                          <input type="radio" name="q1" value="A" /> A) Promote Indigenous culture<br />
                          <input type="radio" name="q1" value="B" /> B) Assimilate Indigenous children<br />
                          <input type="radio" name="q1" value="C" /> C) Provide economic opportunities<br />
                          <input type="radio" name="q1" value="D" /> D) Enhance community development<br />
                        </li>
                        <li>Which commission released 94 Calls to Action in 2015?<br />
                          <input type="radio" name="q2" value="A" /> A) Royal Commission on Aboriginal Peoples<br />
                          <input type="radio" name="q2" value="B" /> B) Truth and Reconciliation Commission<br />
                          <input type="radio" name="q2" value="C" /> C) National Inquiry into MMIWG<br />
                          <input type="radio" name="q2" value="D" /> D) Kelowna Accord Commission<br />
                        </li>
                        <li>What is a key issue in Indigenous land rights disputes?<br />
                          <input type="radio" name="q3" value="A" /> A) Urban expansion<br />
                          <input type="radio" name="q3" value="B" /> B) Treaty violations<br />
                          <input type="radio" name="q3" value="C" /> C) Cultural festivals<br />
                          <input type="radio" name="q3" value="D" /> D) Economic equality<br />
                        </li>
                        <li>Which environmental ideology values nature’s intrinsic worth?<br />
                          <input type="radio" name="q4" value="A" /> A) Market environmentalism<br />
                          <input type="radio" name="q4" value="B" /> B) Deep ecology<br />
                          <input type="radio" name="q4" value="C" /> C) Anthropocentrism<br />
                          <input type="radio" name="q4" value="D" /> D) Economic liberalism<br />
                        </li>
                        <li>What conflict is central to environmental ideologies?<br />
                          <input type="radio" name="q5" value="A" /> A) Economic growth vs. sustainability<br />
                          <input type="radio" name="q5" value="B" /> B) Cultural preservation vs. globalization<br />
                          <input type="radio" name="q5" value="C" /> C) Political stability vs. democracy<br />
                          <input type="radio" name="q5" value="D" /> D) Military expansion vs. peace<br />
                        </li>
                        <li>How many Calls to Action were issued by the Truth and Reconciliation Commission?<br />
                          <input type="radio" name="q6" value="A" /> A) 94<br />
                          <input type="radio" name="q6" value="B" /> B) 92<br />
                          <input type="radio" name="q6" value="C" /> C) 96<br />
                          <input type="radio" name="q6" value="D" /> D) 90<br />
                        </li>
                        <li>Which industry often conflicts with Indigenous land rights in Alberta?<br />
                          <input type="radio" name="q7" value="A" /> A) Tourism<br />
                          <input type="radio" name="q7" value="B" /> B) Oil sands<br />
                          <input type="radio" name="q7" value="C" /> C) Agriculture<br />
                          <input type="radio" name="q7" value="D" /> D) Technology<br />
                        </li>
                        <li>What is a primary goal of market environmentalism?<br />
                          <input type="radio" name="q8" value="A" /> A) Ban industrial activity<br />
                          <input type="radio" name="q8" value="B" /> B) Use market-based solutions<br />
                          <input type="radio" name="q8" value="C" /> C) Preserve nature’s intrinsic value<br />
                          <input type="radio" name="q8" value="D" /> D) Promote collective ownership<br />
                        </li>
                        <li>Which global agreement addresses climate change?<br />
                          <input type="radio" name="q9" value="A" /> A) Kyoto Protocol<br />
                          <input type="radio" name="q9" value="B" /> B) Paris Agreement<br />
                          <input type="radio" name="q9" value="C" /> C) Montreal Protocol<br />
                          <input type="radio" name="q9" value="D" /> D) Geneva Conventions<br />
                        </li>
                        <li>What is a key step in analyzing a political cartoon?<br />
                          <input type="radio" name="q10" value="A" /> A) Ignore historical context<br />
                          <input type="radio" name="q10" value="B" /> B) Identify bias and perspective<br />
                          <input type="radio" name="q10" value="C" /> C) Focus only on visuals<br />
                          <input type="radio" name="q10" value="D" /> D) Avoid ideological connections<br />
                        </li>
                        <li>Which Indigenous issue is tied to intergenerational trauma?<br />
                          <input type="radio" name="q11" value="A" /> A) Economic development<br />
                          <input type="radio" name="q11" value="B" /> B) Residential schools<br />
                          <input type="radio" name="q11" value="C" /> C) Urban migration<br />
                          <input type="radio" name="q11" value="D" /> D) Cultural festivals<br />
                        </li>
                        <li>What environmental issue is linked to Alberta’s oil sands?<br />
                          <input type="radio" name="q12" value="A" /> A) Cultural loss<br />
                          <input type="radio" name="q12" value="B" /> B) Water contamination<br />
                          <input type="radio" name="q12" value="C" /> C) Economic equality<br />
                          <input type="radio" name="q12" value="D" /> D) Political stability<br />
                        </li>
                        <li>Which perspective views humans as environmental stewards?<br />
                          <input type="radio" name="q13" value="A" /> A) Deep ecology<br />
                          <input type="radio" name="q13" value="B" /> B) Environmentalism<br />
                          <input type="radio" name="q13" value="C" /> C) Anthropocentrism<br />
                          <input type="radio" name="q13" value="D" /> D) Market liberalism<br />
                        </li>
                        <li>What is a primary source for Indigenous land claims?<br />
                          <input type="radio" name="q14" value="A" /> A) Oral histories<br />
                          <input type="radio" name="q14" value="B" /> B) Corporate records<br />
                          <input type="radio" name="q14" value="C" /> C) Media reports<br />
                          <input type="radio" name="q14" value="D" /> D) Scientific studies<br />
                        </li>
                        <li>Which environmental ideology prioritizes economic growth?<br />
                          <input type="radio" name="q15" value="A" /> A) Deep ecology<br />
                          <input type="radio" name="q15" value="B" /> B) Market environmentalism<br />
                          <input type="radio" name="q15" value="C" /> C) Eco-socialism<br />
                          <input type="radio" name="q15" value="D" /> D) Biocentrism<br />
                        </li>
                        <li>What technique helps identify bias in source analysis?<br />
                          <input type="radio" name="q16" value="A" /> A) Ignore the author’s intent<br />
                          <input type="radio" name="q16" value="B" /> B) Examine the author’s perspective<br />
                          <input type="radio" name="q16" value="C" /> C) Focus only on facts<br />
                          <input type="radio" name="q16" value="D" /> D) Avoid historical context<br />
                        </li>
                        <li>Which 1990 event highlighted Indigenous land rights?<br />
                          <input type="radio" name="q17" value="A" /> A) Oka Crisis<br />
                          <input type="radio" name="q17" value="B" /> B) Meech Lake Accord<br />
                          <input type="radio" name="q17" value="C" /> C) Kelowna Accord<br />
                          <input type="radio" name="q17" value="D" /> D) Charlottetown Accord<br />
                        </li>
                        <li>What is a key goal of the Truth and Reconciliation Commission?<br />
                          <input type="radio" name="q18" value="A" /> A) Promote economic growth<br />
                          <input type="radio" name="q18" value="B" /> B) Address historical injustices<br />
                          <input type="radio" name="q18" value="C" /> C) Encourage cultural assimilation<br />
                          <input type="radio" name="q18" value="D" /> D) Reform military policies<br />
                        </li>
                        <li>Which issue is linked to resource extraction in Alberta?<br />
                          <input type="radio" name="q19" value="A" /> A) Cultural preservation<br />
                          <input type="radio" name="q19" value="B" /> B) Water contamination<br />
                          <input type="radio" name="q19" value="C" /> C) Economic equality<br />
                          <input type="radio" name="q19" value="D" /> D) Political stability<br />
                        </li>
                        <li>In source analysis, what should you connect a source to?<br />
                          <input type="radio" name="q20" value="A" /> A) Personal opinions<br />
                          <input type="radio" name="q20" value="B" /> B) Ideological themes<br />
                          <input type="radio" name="q20" value="C" /> C) Unrelated events<br />
                          <input type="radio" name="q20" value="D" /> D) Fictional narratives<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz5Form', 'quiz5Feedback', ['B', 'B', 'B', 'B', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'A', 'B', 'B', 'B'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz5Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 6: Source Analysis and Critical Thinking */}
            <div className="accordion" id="quizAccordion6">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading6">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                    Quiz 6: Source Analysis and Critical Thinking (20 Questions)
                  </button>
                </h2>
                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#quizAccordion6">
                  <div className="accordion-body">
                    <p>This quiz tests your ability to analyze sources (cartoons, quotes, graphs) and apply critical thinking skills, as required in the Social Studies 30-2 diploma exam.</p>
                    <form id="quiz6Form">
                      <ol>
                        <li>What is the first step in analyzing a political cartoon?<br />
                          <input type="radio" name="q1" value="A" /> A) Ignore the symbols<br />
                          <input type="radio" name="q1" value="B" /> B) Identify symbols and context<br />
                          <input type="radio" name="q1" value="C" /> C) Focus only on text<br />
                          <input type="radio" name="q1" value="D" /> D) Assume neutrality<br />
                        </li>
                        <li>A source with exaggerated features likely indicates what?<br />
                          <input type="radio" name="q2" value="A" /> A) Objectivity<br />
                          <input type="radio" name="q2" value="B" /> B) Bias<br />
                          <input type="radio" name="q2" value="C" /> C) Factual accuracy<br />
                          <input type="radio" name="q2" value="D" /> D) Historical irrelevance<br />
                        </li>
                        <li>Which source type is most likely to reflect an individual’s perspective?<br />
                          <input type="radio" name="q3" value="A" /> A) Government report<br />
                          <input type="radio" name="q3" value="B" /> B) Personal diary<br />
                          <input type="radio" name="q3" value="C" /> C) Census data<br />
                          <input type="radio" name="q3" value="D" /> D) Economic graph<br />
                        </li>
                        <li>What should you examine to determine a source’s reliability?<br />
                          <input type="radio" name="q4" value="A" /> A) Author’s credentials<br />
                          <input type="radio" name="q4" value="B" /> B) Visual appeal<br />
                          <input type="radio" name="q4" value="C" /> C) Length of text<br />
                          <input type="radio" name="q4" value="D" /> D) Publication date only<br />
                        </li>
                        <li>A quote praising communism likely reflects which ideology?<br />
                          <input type="radio" name="q5" value="A" /> A) Liberalism<br />
                          <input type="radio" name="q5" value="B" /> B) Communism<br />
                          <input type="radio" name="q5" value="C" /> C) Fascism<br />
                          <input type="radio" name="q5" value="D" /> D) Capitalism<br />
                        </li>
                        <li>What is a common purpose of a propaganda poster?<br />
                          <input type="radio" name="q6" value="A" /> A) Provide objective facts<br />
                          <input type="radio" name="q6" value="B" /> B) Persuade the audience<br />
                          <input type="radio" name="q6" value="C" /> C) Document history<br />
                          <input type="radio" name="q6" value="D" /> D) Promote neutrality<br />
                        </li>
                        <li>In source analysis, connecting a source to what strengthens your argument?<br />
                          <input type="radio" name="q7" value="A" /> A) Personal opinions<br />
                          <input type="radio" name="q7" value="B" /> B) Ideological themes<br />
                          <input type="radio" name="q7" value="C" /> C) Unrelated events<br />
                          <input type="radio" name="q7" value="D" /> D) Fictional narratives<br />
                        </li>
                        <li>A graph showing income inequality might support which ideology’s critique?<br />
                          <input type="radio" name="q8" value="A" /> A) Classical liberalism<br />
                          <input type="radio" name="q8" value="B" /> B) Socialism<br />
                          <input type="radio" name="q8" value="C" /> C) Fascism<br />
                          <input type="radio" name="q8" value="D" /> D) Conservatism<br />
                        </li>
                        <li>What indicates a source’s historical context?<br />
                          <input type="radio" name="q9" value="A" /> A) Author’s nationality<br />
                          <input type="radio" name="q9" value="B" /> B) Date and events of the period<br />
                          <input type="radio" name="q9" value="C" /> C) Visual design<br />
                          <input type="radio" name="q9" value="D" /> D) Language complexity<br />
                        </li>
                        <li>A cartoon criticizing government surveillance aligns with which principle?<br />
                          <input type="radio" name="q10" value="A" /> A) Collective security<br />
                          <input type="radio" name="q10" value="B" /> B) Individual rights<br />
                          <input type="radio" name="q10" value="C" /> C) Economic freedom<br />
                          <input type="radio" name="q10" value="D" /> D) Rule of law<br />
                        </li>
                        <li>What is a limitation of a primary source?<br />
                          <input type="radio" name="q11" value="A" /> A) Too much objectivity<br />
                          <input type="radio" name="q11" value="B" /> B) Potential bias<br />
                          <input type="radio" name="q11" value="C" /> C) Lack of detail<br />
                          <input type="radio" name="q11" value="D" /> D) No historical value<br />
                        </li>
                        <li>A quote from 1917 praising collective ownership reflects which ideology?<br />
                          <input type="radio" name="q12" value="A" /> A) Liberalism<br />
                          <input type="radio" name="q12" value="B" /> B) Communism<br />
                          <input type="radio" name="q12" value="C" /> C) Fascism<br />
                          <input type="radio" name="q12" value="D" /> D) Capitalism<br />
                        </li>
                        <li>What should you avoid when analyzing a source?<br />
                          <input type="radio" name="q13" value="A" /> A) Considering context<br />
                          <input type="radio" name="q13" value="B" /> B) Assuming neutrality<br />
                          <input type="radio" name="q13" value="C" /> C) Identifying perspective<br />
                          <input type="radio" name="q13" value="D" /> D) Linking to ideologies<br />
                        </li>
                        <li>A graph showing GDP growth might support which ideology?<br />
                          <input type="radio" name="q14" value="A" /> A) Socialism<br />
                          <input type="radio" name="q14" value="B" /> B) Capitalism<br />
                          <input type="radio" name="q14" value="C" /> C) Communism<br />
                          <input type="radio" name="q14" value="D" /> D) Environmentalism<br />
                        </li>
                        <li>What is a sign of bias in a newspaper article?<br />
                          <input type="radio" name="q15" value="A" /> A) Factual reporting<br />
                          <input type="radio" name="q15" value="B" /> B) Selective word choice<br />
                          <input type="radio" name="q15" value="C" /> C) Detailed statistics<br />
                          <input type="radio" name="q15" value="D" /> D) Historical references<br />
                        </li>
                        <li>A cartoon from 1945 glorifying war likely reflects which ideology?<br />
                          <input type="radio" name="q16" value="A" /> A) Liberalism<br />
                          <input type="radio" name="q16" value="B" /> B) Fascism<br />
                          <input type="radio" name="q16" value="C" /> C) Socialism<br />
                          <input type="radio" name="q16" value="D" /> D) Communism<br />
                        </li>
                        <li>What strengthens a source analysis argument?<br />
                          <input type="radio" name="q17" value="A" /> A) Ignoring counterarguments<br />
                          <input type="radio" name="q17" value="B" /> B) Using historical evidence<br />
                          <input type="radio" name="q17" value="C" /> C) Focusing on visuals only<br />
                          <input type="radio" name="q17" value="D" /> D) Avoiding context<br />
                        </li>
                        <li>A quote advocating for free speech aligns with which principle?<br />
                          <input type="radio" name="q18" value="A" /> A) Collective welfare<br />
                          <input type="radio" name="q18" value="B" /> B) Individual rights<br />
                          <input type="radio" name="q18" value="C" /> C) Economic equality<br />
                          <input type="radio" name="q18" value="D" /> D) National security<br />
                        </li>
                        <li>What is a purpose of cross-referencing sources?<br />
                          <input type="radio" name="q19" value="A" /> A) Confirm accuracy<br />
                          <input type="radio" name="q19" value="B" /> B) Simplify analysis<br />
                          <input type="radio" name="q19" value="C" /> C) Ignore bias<br />
                          <input type="radio" name="q19" value="D" /> D) Reduce context<br />
                        </li>
                        <li>A source from a government official might reflect what?<br />
                          <input type="radio" name="q20" value="A" /> A) Neutral perspective<br />
                          <input type="radio" name="q20" value="B" /> B) Official policy bias<br />
                          <input type="radio" name="q20" value="C" /> C) Public opinion<br />
                          <input type="radio" name="q20" value="D" /> D) Academic objectivity<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz6Form', 'quiz6Feedback', ['B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz6Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 7: Historical Case Studies */}
            <div className="accordion" id="quizAccordion7">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading7">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                    Quiz 7: Historical Case Studies (20 Questions)
                  </button>
                </h2>
                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#quizAccordion7">
                  <div className="accordion-body">
                    <p>This quiz examines historical events tied to ideologies, including revolutions, wars, and Canadian examples, as per Social Studies 30-2.</p>
                    <form id="quiz7Form">
                      <ol>
                        <li>Which 1917 event established a communist state in Russia?<br />
                          <input type="radio" name="q1" value="A" /> A) French Revolution<br />
                          <input type="radio" name="q1" value="B" /> B) Russian Revolution<br />
                          <input type="radio" name="q1" value="C" /> C) American Revolution<br />
                          <input type="radio" name="q1" value="D" /> D) Industrial Revolution<br />
                        </li>
                        <li>What was a consequence of the Treaty of Versailles (1919)?<br />
                          <input type="radio" name="q2" value="A" /> A) German economic prosperity<br />
                          <input type="radio" name="q2" value="B" /> B) Rise of fascism<br />
                          <input type="radio" name="q2" value="C" /> C) Global peace<br />
                          <input type="radio" name="q2" value="D" /> D) Strengthened democracy<br />
                        </li>
                        <li>Which WWII policy violated liberal principles in Canada?<br />
                          <input type="radio" name="q3" value="A" /> A) Conscription<br />
                          <input type="radio" name="q3" value="B" /> B) Japanese internment<br />
                          <input type="radio" name="q3" value="C" /> C) War bonds<br />
                          <input type="radio" name="q3" value="D" /> D) Rationing<br />
                        </li>
                        <li>What was a key feature of the Great Depression (1929–1939)?<br />
                          <input type="radio" name="q4" value="A" /> A) Economic prosperity<br />
                          <input type="radio" name="q4" value="B" /> B) Mass unemployment<br />
                          <input type="radio" name="q4" value="C" /> C) Political stability<br />
                          <input type="radio" name="q4" value="D" /> D) Global trade growth<br />
                        </li>
                        <li>Which leader’s New Deal addressed the Great Depression?<br />
                          <input type="radio" name="q5" value="A" /> A) Stalin<br />
                          <input type="radio" name="q5" value="B" /> B) Roosevelt<br />
                          <input type="radio" name="q5" value="C" /> C) Hitler<br />
                          <input type="radio" name="q5" value="D" /> D) Mussolini<br />
                        </li>
                        <li>What was a goal of the Indian Act (1876) in Canada?<br />
                          <input type="radio" name="q6" value="A" /> A) Promote Indigenous rights<br />
                          <input type="radio" name="q6" value="B" /> B) Assimilate Indigenous peoples<br />
                          <input type="radio" name="q6" value="C" /> C) Grant land ownership<br />
                          <input type="radio" name="q6" value="D" /> D) Encourage self-governance<br />
                        </li>
                        <li>Which event marked India’s independence from Britain (1947)?<br />
                          <input type="radio" name="q7" value="A" /> A) Partition of India<br />
                          <input type="radio" name="q7" value="B" /> B) Salt March<br />
                          <input type="radio" name="q7" value="C" /> C) Amritsar Massacre<br />
                          <input type="radio" name="q7" value="D" /> D) Quit India Movement<br />
                        </li>
                        <li>What was a result of the Bolshevik Revolution (1917)?<br />
                          <input type="radio" name="q8" value="A" /> A) Democratic reforms<br />
                          <input type="radio" name="q8" value="B" /> B) Communist state<br />
                          <input type="radio" name="q8" value="C" /> C) Monarchy restoration<br />
                          <input type="radio" name="q8" value="D" /> D) Capitalist economy<br />
                        </li>
                        <li>Which Canadian policy restricted Chinese immigration (1885)?<br />
                          <input type="radio" name="q9" value="A" /> A) Indian Act<br />
                          <input type="radio" name="q9" value="B" /> B) Chinese Head Tax<br />
                          <input type="radio" name="q9" value="C" /> C) War Measures Act<br />
                          <input type="radio" name="q9" value="D" /> D) Multiculturalism Act<br />
                        </li>
                        <li>What was a key feature of Stalin’s Five-Year Plans?<br />
                          <input type="radio" name="q10" value="A" /> A) Free market policies<br />
                          <input type="radio" name="q10" value="B" /> B) Rapid industrialization<br />
                          <input type="radio" name="q10" value="C" /> C) Democratic reforms<br />
                          <input type="radio" name="q10" value="D" /> D) Individual freedoms<br />
                        </li>
                        <li>Which event led to the rise of Nazi Germany?<br />
                          <input type="radio" name="q11" value="A" /> A) Russian Revolution<br />
                          <input type="radio" name="q11" value="B" /> B) Great Depression<br />
                          <input type="radio" name="q11" value="C" /> C) Cold War<br />
                          <input type="radio" name="q11" value="D" /> D) French Revolution<br />
                        </li>
                        <li>What was a consequence of Japanese internment in Canada?<br />
                          <input type="radio" name="q12" value="A" /> A) Economic growth<br />
                          <input type="radio" name="q12" value="B" /> B) Human rights violations<br />
                          <input type="radio" name="q12" value="C" /> C) Cultural preservation<br />
                          <input type="radio" name="q12" value="D" /> D) Political stability<br />
                        </li>
                        <li>Which movement challenged apartheid in South Africa?<br />
                          <input type="radio" name="q13" value="A" /> A) Civil Rights Movement<br />
                          <input type="radio" name="q13" value="B" /> B) Anti-Apartheid Movement<br />
                          <input type="radio" name="q13" value="C" /> C) Suffrage Movement<br />
                          <input type="radio" name="q13" value="D" /> D) Labor Movement<br />
                        </li>
                        <li>What was a key outcome of the Quiet Revolution in Quebec (1960s)?<br />
                          <input type="radio" name="q14" value="A" /> A) Economic decline<br />
                          <input type="radio" name="q14" value="B" /> B) Secularization<br />
                          <input type="radio" name="q14" value="C" /> C) Federal dominance<br />
                          <input type="radio" name="q14" value="D" /> D) Military reform<br />
                        </li>
                        <li>Which leader was associated with the Russian Revolution?<br />
                          <input type="radio" name="q15" value="A" /> A) Lenin<br />
                          <input type="radio" name="q15" value="B" /> B) Mussolini<br />
                          <input type="radio" name="q15" value="C" /> C) Hitler<br />
                          <input type="radio" name="q15" value="D" /> D) Mao<br />
                        </li>
                        <li>What was a goal of the Suffrage Movement in Canada?<br />
                          <input type="radio" name="q16" value="A" /> A) Economic equality<br />
                          <input type="radio" name="q16" value="B" /> B) Women’s voting rights<br />
                          <input type="radio" name="q16" value="C" /> C) Military reform<br />
                          <input type="radio" name="q16" value="D" /> D) Cultural assimilation<br />
                        </li>
                        <li>Which event caused global economic instability in 1929?<br />
                          <input type="radio" name="q17" value="A" /> A) Stock Market Crash<br />
                          <input type="radio" name="q17" value="B" /> B) WWII<br />
                          <input type="radio" name="q17" value="C" /> C) Cold War<br />
                          <input type="radio" name="q17" value="D" /> D) Russian Revolution<br />
                        </li>
                        <li>What was a result of decolonization in Africa post-WWII?<br />
                          <input type="radio" name="q18" value="A" /> A) Economic dependence<br />
                          <input type="radio" name="q18" value="B" /> B) National independence<br />
                          <input type="radio" name="q18" value="C" /> C) Colonial expansion<br />
                          <input type="radio" name="q18" value="D" /> D) Military conflict<br />
                        </li>
                        <li>Which Canadian policy apologized for Japanese internment (1988)?<br />
                          <input type="radio" name="q19" value="A" /> A) Multiculturalism Act<br />
                          <input type="radio" name="q19" value="B" /> B) Redress Agreement<br />
                          <input type="radio" name="q19" value="C" /> C) War Measures Act<br />
                          <input type="radio" name="q19" value="D" /> D) Indian Act<br />
                        </li>
                        <li>What was a key feature of the Spanish Civil War (1936–1939)?<br />
                          <input type="radio" name="q20" value="A" /> A) Democratic victory<br />
                          <input type="radio" name="q20" value="B" /> B) Fascist victory<br />
                          <input type="radio" name="q20" value="C" /> C) Communist victory<br />
                          <input type="radio" name="q20" value="D" /> D) Economic prosperity<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz7Form', 'quiz7Feedback', ['B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz7Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Quiz 8: Contemporary Issues and Ideologies */}
            <div className="accordion" id="quizAccordion8">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading8">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                    Quiz 8: Contemporary Issues and Ideologies (20 Questions)
                  </button>
                </h2>
                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#quizAccordion8">
                  <div className="accordion-body">
                    <p>This quiz explores modern applications of ideologies, including populism, social media, reconciliation, and climate policy, as per Social Studies 30-2.</p>
                    <form id="quiz8Form">
                                            <ol>
                        <li>What is a key feature of populism in modern politics?<br />
                          <input type="radio" name="q1" value="A" /> A) Elite-driven policies<br />
                          <input type="radio" name="q1" value="B" /> B) Appeal to the general public<br />
                          <input type="radio" name="q1" value="C" /> C) Economic equality<br />
                          <input type="radio" name="q1" value="D" /> D) Global cooperation<br />
                        </li>
                        <li>How has social media impacted political ideologies?<br />
                          <input type="radio" name="q2" value="A" /> A) Reduced polarization<br />
                          <input type="radio" name="q2" value="B" /> B) Amplified voices and bias<br />
                          <input type="radio" name="q2" value="C" /> C) Eliminated propaganda<br />
                          <input type="radio" name="q2" value="D" /> D) Promoted neutrality<br />
                        </li>
                        <li>What is a goal of Indigenous reconciliation in Canada?<br />
                          <input type="radio" name="q3" value="A" /> A) Economic isolation<br />
                          <input type="radio" name="q3" value="B" /> B) Address historical injustices<br />
                          <input type="radio" name="q3" value="C" /> C) Cultural assimilation<br />
                          <input type="radio" name="q3" value="D" /> D) Military reform<br />
                        </li>
                        <li>Which modern issue challenges liberal democracy?<br />
                          <input type="radio" name="q4" value="A" /> A) Economic growth<br />
                          <input type="radio" name="q4" value="B" /> B) Rise of authoritarianism<br />
                          <input type="radio" name="q4" value="C" /> C) Cultural preservation<br />
                          <input type="radio" name="q4" value="D" /> D) Global trade<br />
                        </li>
                        <li>What is a key focus of modern climate policies?<br />
                          <input type="radio" name="q5" value="A" /> A) Economic expansion<br />
                          <input type="radio" name="q5" value="B" /> B) Carbon emission reduction<br />
                          <input type="radio" name="q5" value="C" /> C) Military security<br />
                          <input type="radio" name="q5" value="D" /> D) Cultural diversity<br />
                        </li>
                        <li>Which organization promotes global human rights today?<br />
                          <input type="radio" name="q6" value="A" /> A) World Trade Organization<br />
                          <input type="radio" name="q6" value="B" /> B) Amnesty International<br />
                          <input type="radio" name="q6" value="C" /> C) International Monetary Fund<br />
                          <input type="radio" name="q6" value="D" /> D) World Bank<br />
                        </li>
                        <li>What is a modern example of economic liberalism?<br />
                          <input type="radio" name="q7" value="A" /> A) State-controlled industries<br />
                          <input type="radio" name="q7" value="B" /> B) Free trade agreements<br />
                          <input type="radio" name="q7" value="C" /> C) Collectivization<br />
                          <input type="radio" name="q7" value="D" /> D) Command economy<br />
                        </li>
                        <li>How does globalization impact Indigenous communities?<br />
                          <input type="radio" name="q8" value="A" /> A) Strengthens cultural identity<br />
                          <input type="radio" name="q8" value="B" /> B) Threatens cultural preservation<br />
                          <input type="radio" name="q8" value="C" /> C) Promotes economic equality<br />
                          <input type="radio" name="q8" value="D" /> D) Enhances political power<br />
                        </li>
                        <li>What is a challenge of modern populism?<br />
                          <input type="radio" name="q9" value="A" /> A) Promotes inclusivity<br />
                          <input type="radio" name="q9" value="B" /> B) Polarizes societies<br />
                          <input type="radio" name="q9" value="C" /> C) Strengthens institutions<br />
                          <input type="radio" name="q9" value="D" /> D) Reduces inequality<br />
                        </li>
                        <li>Which modern issue is tied to data privacy?<br />
                          <input type="radio" name="q10" value="A" /> A) Economic growth<br />
                          <input type="radio" name="q10" value="B" /> B) Individual rights<br />
                          <input type="radio" name="q10" value="C" /> C) Military security<br />
                          <input type="radio" name="q10" value="D" /> D) Cultural diversity<br />
                        </li>
                        <li>What is a goal of Canada’s Multiculturalism Act (1988)?<br />
                          <input type="radio" name="q11" value="A" /> A) Cultural assimilation<br />
                          <input type="radio" name="q11" value="B" /> B) Cultural diversity<br />
                          <input type="radio" name="q11" value="C" /> C) Economic isolation<br />
                          <input type="radio" name="q11" value="D" /> D) Military reform<br />
                        </li>
                        <li>Which modern movement addresses gender equality?<br />
                          <input type="radio" name="q12" value="A" /> A) Environmentalism<br />
                          <input type="radio" name="q12" value="B" /> B) Feminism<br />
                          <input type="radio" name="q12" value="C" /> C) Populism<br />
                          <input type="radio" name="q12" value="D" /> D) Nationalism<br />
                        </li>
                        <li>What is a modern example of a human rights issue?<br />
                          <input type="radio" name="q13" value="A" /> A) Economic prosperity<br />
                          <input type="radio" name="q13" value="B" /> B) Refugee crises<br />
                          <input type="radio" name="q13" value="C" /> C) Cultural festivals<br />
                          <input type="radio" name="q13" value="D" /> D) Military expansion<br />
                        </li>
                        <li>Which ideology supports universal healthcare in Canada?<br />
                          <input type="radio" name="q14" value="A" /> A) Classical liberalism<br />
                          <input type="radio" name="q14" value="B" /> B) Modern liberalism<br />
                          <input type="radio" name="q14" value="C" /> C) Fascism<br />
                          <input type="radio" name="q14" value="D" /> D) Communism<br />
                        </li>
                        <li>What is a modern environmental challenge?<br />
                          <input type="radio" name="q15" value="A" /> A) Cultural preservation<br />
                          <input type="radio" name="q15" value="B" /> B) Climate change<br />
                          <input type="radio" name="q15" value="C" /> C) Economic equality<br />
                          <input type="radio" name="q15" value="D" /> D) Political stability<br />
                        </li>
                        <li>Which modern policy addresses Indigenous land claims?<br />
                          <input type="radio" name="q16" value="A" /> A) Indian Act<br />
                          <input type="radio" name="q16" value="B" /> B) Land Claim Agreements<br />
                          <input type="radio" name="q16" value="C" /> C) War Measures Act<br />
                          <input type="radio" name="q16" value="D" /> D) Multiculturalism Act<br />
                        </li>
                        <li>What is a modern impact of social media on democracy?<br />
                          <input type="radio" name="q17" value="A" /> A) Reduces voter turnout<br />
                          <input type="radio" name="q17" value="B" /> B) Spreads misinformation<br />
                          <input type="radio" name="q17" value="C" /> C) Strengthens institutions<br />
                          <input type="radio" name="q17" value="D" /> D) Promotes equality<br />
                        </li>
                        <li>Which modern ideology critiques globalization?<br />
                          <input type="radio" name="q18" value="A" /> A) Liberalism<br />
                          <input type="radio" name="q18" value="B" /> B) Nationalism<br />
                          <input type="radio" name="q18" value="C" /> C) Capitalism<br />
                          <input type="radio" name="q18" value="D" /> D) Socialism<br />
                        </li>
                        <li>Which ideology supports high taxes and social services for redistribution?<br />
                          <input type="radio" name="q19" value="A" /> A) Fascism<br />
                          <input type="radio" name="q19" value="B" /> B) Socialism<br />
                          <input type="radio" name="q19" value="C" /> C) Liberalism<br />
                          <input type="radio" name="q19" value="D" /> D) Communism<br />
                        </li>
                        <li>Which event led to the spread of socialist policies in post-WWII Europe?<br />
                          <input type="radio" name="q20" value="A" /> A) Cold War<br />
                          <input type="radio" name="q20" value="B" /> B) Great Depression<br />
                          <input type="radio" name="q20" value="C" /> C) Reconstruction era<br />
                          <input type="radio" name="q20" value="D" /> D) Industrial Revolution<br />
                        </li>
                      </ol>
                      <button type="button" className="btn btn-primary" onClick={() => window.gradeQuiz('quiz8Form', 'quiz8Feedback', ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C'])}>Grade Quiz</button>
                    </form>
                    <div id="quiz8Feedback" className="quiz-feedback mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </main>
  );
}