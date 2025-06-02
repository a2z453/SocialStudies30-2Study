import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Home() {
  const [isFunMode, setIsFunMode] = useState(false);
  const [hasSoundPermission, setHasSoundPermission] = useState(false);

  useEffect(() => {
    if (!isFunMode) return;

    // Trigger confetti burst when Fun Mode is activated
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Request sound permission (one-time prompt)
    if (!hasSoundPermission) {
      const permitSound = confirm('Allow sound effects for Fun Mode?');
      setHasSoundPermission(permitSound);
    }

    // Spawn images at random intervals
    const interval = setInterval(() => {
      spawnFunImage(hasSoundPermission);
    }, Math.random() * 4000 + 1000); // 1–5 seconds

    return () => clearInterval(interval);
  }, [isFunMode, hasSoundPermission]);

  // Function to spawn a fun image (defined in public/scripts/funmode.js)
  const spawnFunImage = (playSound) => {
    if (typeof window.spawnFunImage === 'function') {
      window.spawnFunImage(playSound);
    }
  };

  return (
    <main className="container position-relative">
      <Head>
        <title>Social Studies 30-2 Comprehensive Study Guide</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/scripts/funmode.js" defer></script>
      </Head>
      {/* Fun Mode Button */}
      <button
        className="btn btn-warning position-absolute"
        style={{ top: '10px', right: '10px', zIndex: 1000 }}
        onClick={() => setIsFunMode(!isFunMode)}
        aria-label={isFunMode ? 'Disable Fun Mode' : 'Enable Fun Mode'}
        aria-pressed={isFunMode}
      >
        {isFunMode ? 'Exit Fun Mode' : 'Fun Mode'}
      </button>
      {/* Fun Mode Container */}
      <div id="funmode-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 999 }}></div>
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
        <div class="col-md-9">
                <div class="section" id="intro">
                    <h1>Social Studies 30-2 Comprehensive Study Guide</h1>
                    <p>This extensive guide is designed for Alberta’s Social Studies 30-2 curriculum, providing an in-depth exploration of ideologies, their historical and contemporary impacts, and their role in shaping global societies. It covers liberalism, competing ideologies (e.g., communism, fascism, socialism, conservatism), the Cold War, economic systems, globalization, human rights, Indigenous perspectives, environmental ideologies, and source analysis skills. Interactive elements, primary sources, and practice questions align with curriculum outcomes, preparing students for diploma exams.</p>
                    <h2>Key Themes</h2>
                    <ul>
                        <li><strong>Ideological Conflict:</strong> How competing beliefs (e.g., liberalism vs. communism) drive individual, national, and global actions.</li>
                        <li><strong>Liberalism:</strong> Core principles (e.g., individual rights, democracy) and their evolution in response to challenges.</li>
                        <li><strong>Global Impact:</strong> Historical events (e.g., Cold War) and modern issues (e.g., globalization, human rights) shaped by ideologies.</li>
                        <li><strong>Critical Thinking:</strong> Analyzing sources (e.g., cartoons, documents) to evaluate perspectives and biases.</li>
                    </ul>
                    <h2>Curriculum Outcomes</h2>
                    <p>Students will:</p>
                    <ul>
                        <li>Understand the origins and impacts of ideologies.</li>
                        <li>Evaluate liberalism’s role in democratic societies.</li>
                        <li>Analyze historical and contemporary issues through ideological lenses.</li>
                        <li>Develop source interpretation and critical thinking skills for exams.</li>
                    </ul>
                </div>
          {/* Section 1: Liberalism */}
<div class="section" id="liberalism">
                    <h2>Liberalism</h2>
                    <h3>Core Principles</h3>
                    <p>Liberalism is a political and economic ideology centered on individual freedoms, equality, and democratic governance. It emerged during the Enlightenment, challenging absolute monarchy, feudalism, and religious authority.</p>
                    <ul>
                        <li><strong>Individual Rights and Freedoms:</strong> Freedom of speech, religion, press, and assembly, protected by law.</li>
                        <li><strong>Rule of Law:</strong> All individuals and institutions are accountable to fair, transparent laws.</li>
                        <li><strong>Democracy:</strong> Government derives legitimacy from the consent of the governed via free elections.</li>
                        <li><strong>Economic Freedom:</strong> Classical liberalism promotes free markets with minimal government intervention (laissez-faire).</li>
                        <li><strong>Social Equality:</strong> Modern liberalism advocates welfare programs, social safety nets, and equal opportunities to address inequalities.</li>
                        <li><strong>Tolerance and Pluralism:</strong> Respect for diverse beliefs, cultures, and lifestyles.</li>
                    </ul>
                    <h3>Historical Development</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>17th Century: Roots</h4>
                            <p>John Locke’s social contract theory argued that government exists to protect life, liberty, and property, inspiring liberal revolutions.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>18th Century: Enlightenment</h4>
                            <p>Thinkers like Voltaire (freedom of expression), Montesquieu (separation of powers), and Rousseau (popular sovereignty) shaped liberal ideals. The American (1776) and French (1789) Revolutions applied these principles.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>19th Century: Classical Liberalism</h4>
                            <p>Adam Smith’s <em>Wealth of Nations</em> (1776) promoted free markets. Industrial Revolution highlighted tensions between wealth and worker exploitation, prompting reforms.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>20th Century: Modern Liberalism</h4>
                            <p>Great Depression (1929) led to Keynesian economics, emphasizing government intervention (e.g., New Deal). Welfare states emerged in Canada, Europe.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>21st Century: Challenges</h4>
                            <p>Globalization, populism, and authoritarianism test liberalism. Issues like climate change and digital privacy demand new liberal responses.</p>
                        </div>
                    </div>
                    <h3>Key Thinkers</h3>
                    <div class="event">
                        <p><strong>John Locke (1632–1704):</strong> Social contract; government protects natural rights (life, liberty, property). Influenced American Constitution.</p>
                        <p><strong>Adam Smith (1723–1790):</strong> Invisible hand; free markets drive prosperity via competition. Critiqued monopolies.</p>
                        <p><strong>John Stuart Mill (1806–1873):</strong> Harm principle; individual liberty unless harming others. Advocated women’s rights, free speech.</p>
                        <p><strong>John Maynard Keynes (1883–1946):</strong> Government intervention to stabilize economies during crises. Shaped modern liberalism.</p>
                    </div>
                    <h3>Liberalism in Canada</h3>
                    <p>Canada embodies modern liberalism through:</p>
                    <ul>
                        <li><strong>Canadian Charter of Rights and Freedoms (1982):</strong> Guarantees fundamental freedoms, legal rights, equality.</li>
                        <li><strong>Multiculturalism Policy (1971):</strong> Promotes cultural diversity, tolerance.</li>
                        <li><strong>Social Programs:</strong> Universal healthcare (1966), Employment Insurance, Canada Pension Plan.</li>
                        <li><strong>Progressive Reforms:</strong> Same-sex marriage (2005), cannabis legalization (2018).</li>
                    </ul>
                    <p><strong>Challenges:</strong> Balancing individual rights with collective needs (e.g., Indigenous reconciliation, Quebec’s Bill 21 on secularism).</p>
                    <h3>Global Challenges to Liberalism</h3>
                    <p>Liberalism faces threats from:</p>
                    <ul>
                        <li><strong>Populism:</strong> Anti-elite movements (e.g., Brexit, Trumpism) reject liberal institutions.</li>
                        <li><strong>Authoritarianism:</strong> Rise of regimes in China, Russia, Turkey limiting freedoms.</li>
                        <li><strong>Economic Inequality:</strong> Globalization widens wealth gaps, fueling discontent.</li>
                        <li><strong>Technology:</strong> Surveillance, misinformation challenge privacy, free speech.</li>
                    </ul>
                    <h3>Primary Source: Locke’s Second Treatise</h3>
                    <div class="source">
                        <p><strong>Excerpt (1689):</strong></p>
                        <p class="source-excerpt">“The state of nature has a law of nature to govern it, which obliges every one: and reason, which is that law, teaches all mankind… that being all equal and independent, no one ought to harm another in his life, health, liberty, or possessions.”</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What liberal principles are evident in this excerpt?</li>
                            <li>How does Locke’s view contrast with absolute monarchy?</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Classical Liberalism:</strong> Free markets, limited government.</div>
                        <div class="glossary-item"><strong>Modern Liberalism:</strong> Welfare, social equality.</div>
                        <div class="glossary-item"><strong>Social Contract:</strong> Agreement between people and government.</div>
                        <div class="glossary-item"><strong>Pluralism:</strong> Acceptance of diverse beliefs.</div>
                    </div>
                </div>
          {/* Section 2: Ideologies */}
<div class="section" id="ideologies">
                    <h2>Competing Ideologies</h2>
                    <h3>Communism</h3>
                    <div class="ideology">
                        <p><strong>Theory:</strong> Classless, stateless society; collective ownership of production to eliminate exploitation (Karl Marx, Friedrich Engels, <em>Communist Manifesto</em>, 1848).</p>
                        <p><strong>Practice:</strong> Soviet Union (1917–1991) under Lenin, Stalin became authoritarian; state-controlled economy, purges, gulags. Mao’s China (1949–1976) saw Great Leap Forward failures, Cultural Revolution.</p>
                        <p><strong>Case Study: Mao’s China</strong></p>
                        <p>Great Leap Forward (1958–1962): Collectivization led to famine, 20–45 million deaths. Cultural Revolution (1966–1976): Purged intellectuals, disrupted education.</p>
                    </div>
                    <h3>Fascism</h3>
                    <div class="ideology">
                        <p><strong>Theory:</strong> Totalitarian state, extreme nationalism, suppression of dissent, cult of leader (Benito Mussolini).</p>
                        <p><strong>Practice:</strong> Nazi Germany (1933–1945) under Hitler promoted racial purity (Aryan supremacy), militarism, Holocaust (6 million Jews killed). Mussolini’s Italy (1922–1943) suppressed unions, invaded Ethiopia.</p>
                        <p><strong>Case Study: Mussolini’s Italy</strong></p>
                        <p>Corporate state merged government and business; propaganda glorified Mussolini. Invasion of Ethiopia (1935) violated League of Nations, showing fascist aggression.</p>
                    </div>
                    <h3>Socialism</h3>
                    <div class="ideology">
                        <p><strong>Theory:</strong> Collective or state ownership of key industries; prioritizes equality, social welfare (Robert Owen, utopian socialism).</p>
                        <p><strong>Practice:</strong> Democratic socialism in Scandinavia (e.g., Sweden, Norway) uses high taxes to fund universal healthcare, education. Contrasts with authoritarian socialism (e.g., Cuba).</p>
                        <p><strong>Case Study: Sweden</strong></p>
                        <p>Mixed economy with 50% tax rate; funds free education, healthcare. Maintains private enterprise, high living standards.</p>
                    </div>
                    <h3>Conservatism</h3>
                    <div class="ideology">
                        <p><strong>Theory:</strong> Values tradition, social stability, gradual change (Edmund Burke). Opposes rapid reforms, emphasizes institutions (e.g., family, religion).</p>
                        <p><strong>Practice:</strong> UK’s Conservative Party balances tradition with economic liberalism. In Canada, Conservative Party supports free markets, social order.</p>
                        <p><strong>Case Study: UK</strong></p>
                        <p>Thatcher’s policies (1979–1990) privatized industries, reduced union power, reflecting economic conservatism.</p>
                    </div>
                    <h3>Anarchism</h3>
                    <div class="ideology">
                        <p><strong>Theory:</strong> Rejects all forms of authority (government, capitalism); advocates voluntary cooperation (Mikhail Bakunin, Pierre-Joseph Proudhon).</p>
                        <p><strong>Practice:</strong> Limited historical examples (e.g., Spanish Civil War communes, 1936–1939). Modern movements focus on grassroots activism.</p>
                        <p><strong>Case Study: Rojava (Syria)</strong></p>
                        <p>Kurdish region (2010s) experiments with decentralized, egalitarian governance, inspired by anarcho-socialism.</p>
                    </div>
                    <h3>Environmentalism</h3>
                    <div class="ideology">
                        <p><strong>Theory:</strong> Prioritizes environmental protection, sustainability; often critiques capitalism’s ecological impact (Rachel Carson, <em>Silent Spring</em>, 1962).</p>
                        <p><strong>Practice:</strong> Green parties (e.g., Germany’s Greens) advocate renewable energy, carbon taxes. Indigenous environmental movements protect land rights.</p>
                        <p><strong>Case Study: Germany</strong></p>
                        <p>Energiewende policy (2000s) shifts to renewables, reducing coal reliance by 50% by 2020.</p>
                    </div>
                    <h3>Ideological Spectrum</h3>
                    <div class="graph-placeholder">
                        <p>[Insert Diagram: Ideological Spectrum]</p>
                        <p><strong>Description:</strong> Left (communism, socialism) emphasizes equality, collective control; right (conservatism, classical liberalism) prioritizes tradition, individual freedom. Center (modern liberalism, democratic socialism) balances both.</p>
                    </div>
                    <h3>Interactive: Communism vs. Fascism</h3>
                    <p><strong>Drag and drop characteristics to the correct ideology. Double-click to remove. Submit to check answers.</strong></p>
                    <div class="row">
                        <div class="col-md-8">
                            <h4>Communism</h4>
                            <div class="drop-zone" id="communismZone"></div>
                            <h4>Fascism</h4>
                            <div class="drop-zone" id="fascismZone"></div>
                        </div>
                        <div class="col-md-4">
                            <h4>Characteristics</h4>
                            <div id="characteristics">
                                <div class="draggable" draggable="true" data-id="classless">Classless society</div>
                                <div class="draggable" draggable="true" data-id="state-controlled">State-controlled economy</div>
                                <div class="draggable" draggable="true" data-id="nationalism">Nationalism and militarism</div>
                                <div class="draggable" draggable="true" data-id="dictatorship">Single-party dictatorship</div>
                                <div class="draggable" draggable="true" data-id="collective">Collective ownership</div>
                                <div class="draggable" draggable="true" data-id="racial">Racial purity and eugenics</div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" id="submitIdeologies">Submit Answers</button>
                    <div id="ideologyFeedback" class="mt-3"></div>
                    <h3>Primary Source: Marx’s Communist Manifesto</h3>
                    <div class="source">
                        <p><strong>Excerpt (1848):</strong></p>
                        <p class="source-excerpt">“The history of all hitherto existing society is the history of class struggles… The proletariat will use its political supremacy to wrest all capital from the bourgeoisie.”</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What is the main conflict Marx identifies?</li>
                            <li>How does this contrast with liberalism’s view of society?</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Proletariat:</strong> Working class in Marxist theory.</div>
                        <div class="glossary-item"><strong>Bourgeoisie:</strong> Capitalist class owning production.</div>
                        <div class="glossary-item"><strong>Totalitarianism:</strong> Absolute state control over society.</div>
                        <div class="glossary-item"><strong>Nationalism:</strong> Loyalty to nation, often above other values.</div>
                    </div>
                </div>
          {/* Section 3: Cold War */}
<div class="section" id="cold-war">
                    <h2>The Cold War (1945–1991)</h2>
                    <h3>Overview</h3>
                    <p>The Cold War was a global ideological struggle between the USA (democratic capitalism) and USSR (communism), fought through proxy wars, arms races, space races, espionage, and diplomacy. It shaped international relations, divided Europe, and influenced domestic policies (e.g., Red Scare).</p>
                    <h3>Origins</h3>
                    <p><strong>Post-WWII Tensions:</strong></p>
                    <ul>
                        <li><strong>Ideological Divide:</strong> USA promoted democracy, free markets; USSR advocated communism, state control.</li>
                        <li><strong>Power Vacuum:</strong> WWII left Europe devastated; USA and USSR emerged as superpowers.</li>
                        <li><strong>Mistrust:</strong> Stalin’s expansion in Eastern Europe clashed with US containment policy.</li>
                    </ul>
                    <h3>Wartime Conferences</h3>
                    <div class="event">
                        <h4>Yalta Conference (Feb 1945)</h4>
                        <p><strong>Attendees:</strong> Franklin Roosevelt (USA), Winston Churchill (UK), Joseph Stalin (USSR).</p>
                        <p><strong>Goals:</strong> Reorganize Europe, end German militarism, establish UN.</p>
                        <p><strong>Outcomes:</strong></p>
                        <ul>
                            <li>Germany divided into four zones (USA, UK, France, USSR).</li>
                            <li>Soviet control of Eastern Poland; Poland gained German territory.</li>
                            <li>Commitment to democratic elections in liberated nations (often ignored by USSR).</li>
                            <li>UN conference planned for April 1945.</li>
                        </ul>
                    </div>
                    <div class="event">
                        <h4>Potsdam Conference (Jul–Aug 1945)</h4>
                        <p><strong>Attendees:</strong> Harry Truman (USA), Clement Attlee (UK), Stalin (USSR).</p>
                        <p><strong>Outcomes:</strong></p>
                        <ul>
                            <li>Confirmed Germany’s four-zone division.</li>
                            <li>Reordered German economy, banned Nazi institutions.</li>
                            <li>Ultimatum to Japan: surrender or face destruction.</li>
                            <li>Truman’s anti-communism highlighted growing tensions.</li>
                        </ul>
                        <p><strong>Impact:</strong> Set stage for Soviet-Western rivalry, forming Cold War blocs.</p>
                    </div>
                    <h3>Division of Germany</h3>
                    <p><strong>1945:</strong> Germany and Berlin split into four zones. Berlin, within Soviet zone, was also divided.</p>
                    <p><strong>1948–1949: Berlin Blockade</strong></p>
                    <ul>
                        <li>USSR blocked land routes to West Berlin to force Allied withdrawal.</li>
                        <li>Allies launched Berlin Airlift, delivering 13,000 tons of supplies daily for 11 months.</li>
                        <li>Stalin lifted blockade in May 1949, fearing escalation.</li>
                    </ul>
                    <p><strong>1949:</strong> West Germany (Federal Republic, FRG) formed by USA, UK, France; East Germany (German Democratic Republic, GDR) formed by USSR.</p>
                    <p><strong>1961: Berlin Wall</strong></p>
                    <ul>
                        <li>Built by GDR to stop defections (3M fled 1945–1961).</li>
                        <li>Symbols: Brandenburg Gate, Checkpoint Charlie.</li>
                        <li>“Death Strip” between walls claimed 140+ lives.</li>
                    </ul>
                    <p><strong>1990: Reunification</strong></p>
                    <ul>
                        <li>Berlin Wall fell (Nov 9, 1989) amid Gorbachev’s reforms.</li>
                        <li>Germany reunited Oct 3, 1990; economic challenges followed.</li>
                    </ul>
                    <h3>Key Events</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>1946: Iron Curtain Speech</h4>
                            <p>Churchill warned of Soviet control over Eastern Europe, coining “Iron Curtain.”</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1947: Truman Doctrine</h4>
                            <p>USA pledged $400M to Greece, Turkey to resist communism, launching containment.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1948: Marshall Plan</h4>
                            <p>$13B to rebuild Western Europe, countering Soviet influence; rejected by USSR.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1949: NATO</h4>
                            <p>North Atlantic Treaty Organization formed by USA, Canada, Western Europe for collective defense.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1950–1953: Korean War</h4>
                            <p>Proxy war; US-led UN forces vs. Soviet/Chinese-backed North Korea. Ended in stalemate, DMZ established.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1955: Warsaw Pact</h4>
                            <p>USSR’s counter-alliance with Eastern Europe, escalating tensions.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1956: Hungarian Revolt</h4>
                            <p>Anti-Soviet uprising crushed by USSR; 2,500+ killed, 200,000 fled.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1957: Sputnik</h4>
                            <p>USSR’s satellite launch sparked space race, raising US fears of Soviet tech superiority.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1960: U-2 Crisis</h4>
                            <p>US spy plane shot down over USSR; pilot captured, escalating distrust.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1961: Bay of Pigs</h4>
                            <p>Failed CIA-backed invasion of Cuba to overthrow Castro; embarrassed USA.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1962: Cuban Missile Crisis</h4>
                            <p>USSR missiles in Cuba; US blockade; Khrushchev backed down after 13 days, averting nuclear war.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1963–1979: Détente</h4>
                            <p>Reduced tensions; Nuclear Test Ban Treaty (1963), SALT (1969). Ended with Soviet invasion of Afghanistan.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1965–1975: Vietnam War</h4>
                            <p>Proxy war; US-backed South Vietnam vs. Soviet/Chinese-backed North. US withdrawal 1973; North won 1975.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1979–1989: Soviet-Afghan War</h4>
                            <p>USSR supported Afghan communists; USA backed Mujahideen. Drained Soviet resources.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1985: Gorbachev’s Reforms</h4>
                            <p>Perestroika (economic restructuring), Glasnost (political openness) weakened Soviet control.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1989: Berlin Wall Falls</h4>
                            <p>Symbolized Iron Curtain’s collapse; mass protests led to open borders.</p>
                        </div>
                        <div class="timeline-item">
                            <h4>1991: Soviet Union Dissolves</h4>
                            <p>Gorbachev resigned Dec 25, 1991; Warsaw Pact dissolved; Russia declared independence.</p>
                        </div>
                    </div>
                    <h3>Weimar Republic and Nazi Rise</h3>
                    <p><strong>Treaty of Versailles (1919):</strong></p>
                    <ul>
                        <li><strong>Terms:</strong> $33B reparations, territorial losses (13% of land), military limits (100,000 troops, no air force).</li>
                        <li><strong>Impact:</strong> Fueled resentment, economic hardship; “war guilt” clause humiliated Germany.</li>
                        <li><strong>Was it a success?</strong> No; it destabilized Germany, enabling extremist rise.</li>
                    </ul>
                    <p><strong>Weimar Republic (1919–1933):</strong></p>
                    <ul>
                        <li><strong>Structure:</strong> Liberal democracy with universal suffrage, elected Reichstag.</li>
                        <li><strong>Challenges:</strong> Hyperinflation (1923: 4.2T marks = $1), political extremism (communists, Nazis), Great Depression (1929: 6M unemployed).</li>
                        <li><strong>Dawes Plan (1924):</strong> US loans stabilized currency, but collapsed in 1929.</li>
                    </ul>
                    <p><strong>Nazi Rise:</strong></p>
                    <ul>
                        <li><strong>Context:</strong> Economic despair, Versailles resentment, distrust in democracy.</li>
                        <li><strong>Nazi Promises:</strong> Revive military, abolish Versailles, promote nationalism, racial purity, jobs, healthcare.</li>
                        <li><strong>1923:</strong> Munich Putsch failed; Hitler imprisoned, wrote <em>Mein Kampf</em>.</li>
                        <li><strong>1933:</strong> Nazis won 44% of Reichstag seats; Hitler appointed Chancellor.</li>
                        <li><strong>Reichstag Fire (Feb 1933):</strong> Blamed on communists; led to Enabling Act, granting Hitler dictatorial powers.</li>
                        <li><strong>1934:</strong> Night of the Long Knives (SA leaders killed); Hitler became Führer after Hindenburg’s death.</li>
                        <li><strong>1935:</strong> Nuremberg Laws stripped Jews of citizenship.</li>
                        <li><strong>1938:</strong> Kristallnacht; Jewish businesses, homes attacked.</li>
                    </ul>
                    <h3>Red Scare and McCarthyism</h3>
                    <p><strong>Context:</strong> Post-WWII fear of communist infiltration in North America.</p>
                    <p><strong>Key Events:</strong></p>
                    <ul>
                        <li><strong>1945: Gouzenko Affair</strong> Soviet defector in Canada exposed spy network, sparking panic.</li>
                        <li><strong>1947–1954: McCarthyism</strong> US Senator Joseph McCarthy led witch hunts, accusing thousands (e.g., Hollywood, government) of communism without evidence. Ruined careers; Senate censured him in 1954.</li>
                    </ul>
                    <p><strong>Impact:</strong> Eroded civil liberties, fueled paranoia, undermined liberalism’s free speech principles.</p>
                    <h3>Non-Alignment Movement</h3>
                    <p><strong>Overview:</strong> Developing nations (e.g., India, Egypt, Indonesia) rejected Cold War alliances with USA or USSR.</p>
                    <p><strong>Key Events:</strong></p>
                    <ul>
                        <li><strong>1955: Bandung Conference</strong> 29 African/Asian nations promoted cooperation, decolonization.</li>
                        <li><strong>1961: NAM Formed</strong> Belgrade conference; focused on economic aid, neutrality.</li>
                    </ul>
                    <p><strong>Impact:</strong> Limited success; superpowers dominated global politics, but NAM amplified Third World voices.</p>
                    <h3>Interactive: NATO vs. Warsaw Pact</h3>
                    <p><strong>Drag and drop countries to their Cold War alliance. Double-click to remove. Submit to check answers.</strong></p>
                    <div class="row">
                        <div class="col-md-8">
                            <h4>NATO</h4>
                            <div class="drop-zone" id="natoZone"></div>
                            <h4>Warsaw Pact</h4>
                            <div class="drop-zone" id="warsawZone"></div>
                        </div>
                        <div class="col-md-4">
                            <h4>Countries</h4>
                            <div id="countries">
                                <div class="draggable" draggable="true" data-id="usa">USA</div>
                                <div class="draggable" draggable="true" data-id="canada">Canada</div>
                                <div class="draggable" draggable="true" data-id="poland">Poland</div>
                                <div class="draggable" draggable="true" data-id="ussr">USSR</div>
                                <div class="draggable" draggable="true" data-id="uk">UK</div>
                                <div class="draggable" draggable="true" data-id="hungary">Hungary</div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" id="submitAlliances">Submit Answers</button>
                    <div id="allianceFeedback" class="mt-3"></div>
                    <h3>Primary Source: Churchill’s Iron Curtain Speech</h3>
                    <div class="source">
                        <p><strong>Excerpt (Mar 5, 1946):</strong></p>
                        <p class="source-excerpt">“From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent… Behind that line lie all the capitals of the ancient states of Central and Eastern Europe.”</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What does Churchill mean by “iron curtain”?</li>
                            <li>How does this reflect Western fears of Soviet expansion?</li>
                        </ul>
                    </div>
                    <h3>Political Cartoon Analysis</h3>
                    <div class="cartoon-placeholder">
                        <img src="./assets/labor-cartoon.png" alt="Labor Movement Cartoon (1917)" class="img-fluid"></img>
                        <p><strong>Description:</strong> This 1917 cartoon, titled "The Hand That Will Rule the World—One Big Union," depicts a massive fist formed by workers holding tools, symbolizing the power of a united labor movement. The industrial background and ships suggest economic strength, while the Solidarity date (June 30, 1917) ties it to early 20th-century labor struggles, pre-dating the Cold War but relevant to ideological tensions between capitalism and socialism.</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What symbols represent the labor movement, and how do they contrast with capitalist imagery?</li>
                            <li>How might this cartoon relate to Cold War ideologies like communism or socialism?</li>
                            <li>Does the cartoon support or critique the working class? Explain your reasoning.</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Containment:</strong> US policy to limit Soviet expansion.</div>
                        <div class="glossary-item"><strong>Mutually Assured Destruction (MAD):</strong> Nuclear war’s catastrophic outcome.</div>
                        <div class="glossary-item"><strong>Proxy War:</strong> Indirect conflict via supported factions.</div>
                        <div class="glossary-item"><strong>Espionage:</strong> Spying to gain strategic advantage.</div>
                    </div>
                </div>

          {/* Section 4: Economic Systems */}
          <div class="section" id="economic-systems">
                    <h2>Economic Systems</h2>
                    <h3>Free Market Economy</h3>
                    <div class="event">
                        <p><strong>Characteristics:</strong> Prices, wages set by supply/demand; private ownership; minimal government role.</p>
                        <p><strong>Pros:</strong> Innovation, consumer choice, efficiency.</p>
                        <p><strong>Cons:</strong> Wealth inequality, boom-bust cycles, environmental neglect.</p>
                        <p><strong>Historical Example:</strong> USA’s Gilded Age (1870s–1900); rapid industrialization, monopolies (e.g., Rockefeller’s Standard Oil).</p>
                        <p><strong>Case Study: 2008 Financial Crisis</strong></p>
                        <p>Unregulated banking led to global recession; US bailouts ($700B) showed limits of laissez-faire.</p>
                    </div>
                    <h3>Command Economy</h3>
                    <div class="event">
                        <p><strong>Characteristics:</strong> Government controls production, distribution; no private ownership.</p>
                        <p><strong>Pros:</strong> Equality, focus on social goals (e.g., healthcare).</p>
                        <p><strong>Cons:</strong> Inefficiency, shortages, lack of innovation.</p>
                        <p><strong>Historical Example:</strong> USSR’s Five-Year Plans (1928–1991); prioritized industry but caused famines (e.g., Holodomor, 1932–1933).</p>
                        <p><strong>Case Study: Cuba</strong></p>
                        <p>State-controlled economy; free healthcare, education, but shortages and low wages persist.</p>
                    </div>
                    <h3>Mixed Economy</h3>
                    <div class="event">
                        <p><strong>Characteristics:</strong> Blends market and government roles; private enterprise with social safety nets.</p>
                        <p><strong>Pros:</strong> Balances freedom, equality; supports vulnerable populations.</p>
                        <p><strong>Cons:</strong> High taxes, bureaucratic inefficiencies.</p>
                        <p><strong>Historical Example:</strong> Canada’s post-WWII welfare state; universal healthcare (1966), EI.</p>
                        <p><strong>Case Study: China</strong></p>
                        <p>Hybrid model since 1978; state-controlled sectors (e.g., energy) with private enterprise; GDP grew 10% annually, but inequality rose.</p>
                    </div>
                    <h3>Economic Equality</h3>
                    <p><strong>Approaches:</strong></p>
                    <ul>
                        <li><strong>Egalitarianism:</strong> Equal wealth distribution (e.g., universal basic income experiments).</li>
                        <li><strong>Equality of Opportunity:</strong> Fair access to education, jobs (e.g., affirmative action).</li>
                        <li><strong>Equitable Distribution:</strong> Progressive taxation (Canada: 15–33%), wealth redistribution.</li>
                    </ul>
                    <p><strong>Canadian Context:</strong></p>
                    <ul>
                        <li><strong>Taxation:</strong> Progressive rates; top 1% pay 20% of income taxes.</li>
                        <li><strong>Social Programs:</strong> Child Tax Benefit, Old Age Security, EI.</li>
                        <li><strong>Challenges:</strong> Gender pay gap (women earn $0.75 per $1 men earn); Indigenous poverty (25% live below poverty line).</li>
                    </ul>
                    <h3>Historical Crises</h3>
                    <div class="event">
                        <p><strong>Great Depression (1929–1939):</strong></p>
                        <ul>
                            <li><strong>Causes:</strong> Stock market crash, bank failures, overproduction.</li>
                            <li><strong>Impact:</strong> 25% unemployment in Canada; led to welfare state (e.g., US New Deal).</li>
                            <li><strong>Response:</strong> Keynesian policies; public works, social programs.</li>
                        </ul>
                    </div>
                    <h3>Graph Analysis</h3>
                    <div class="graph-placeholder">
                        <img src="./assets/family-income-graph.png" alt="Family Income Distribution in Canada" class="img-fluid"></img>
                        <p><strong>Summary:</strong> This bar graph displays the percentage of Canadian families within various income brackets (under $30,000 to over $250,000). Approximately 90% of families earn under $30,000, with the percentage dropping sharply to about 20% in the $30,000–$45,000 range and further declining to less than 5% for incomes over $150,000. This highlights significant income inequality in Canada.</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What does the high concentration of families under $30,000 suggest about income distribution?</li>
                            <li>How does this data challenge or support the liberal principle of economic equality of opportunity?</li>
                            <li>What policies (e.g., progressive taxation, social programs) might address the inequality shown?</li>
                        </ul>
                    </div>
                    <h3>Primary Source: Keynes’ General Theory</h3>
                    <div class="source">
                        <p><strong>Excerpt (1936):</strong></p>
                        <p class="source-excerpt">“The outstanding faults of the economic society in which we live are its failure to provide for full employment and its arbitrary and inequitable distribution of wealth and incomes.”</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What economic issues does Keynes highlight?</li>
                            <li>How does this support modern liberalism?</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Keynesian Economics:</strong> Government spending to stimulate economy.</div>
                        <div class="glossary-item"><strong>Regressive Tax:</strong> Higher burden on lower incomes.</div>
                        <div class="glossary-item"><strong>Supply and Demand:</strong> Market forces setting prices.</div>
                    </div>
                </div>
          {/* Section 5: Globalization */}
          <div class="section" id="globalization">
                    <h2>Globalization</h2>
                    <h3>Definition</h3>
                    <p>Globalization is the interconnectedness of economies, cultures, and political systems through trade, technology, migration, and communication, accelerated by post-WWII liberalization.</p>
                    <h3>Key Aspects</h3>
                    <ul>
                        <li><strong>Economic:</strong> Free trade agreements (e.g., CUSMA, WTO), multinational corporations (e.g., Apple, Amazon).</li>
                        <li><strong>Cultural:</strong> Spread of media (e.g., Hollywood, K-pop), languages (English as lingua franca).</li>
                        <li><strong>Political:</strong> International organizations (UN, IMF, World Bank), global governance.</li>
                        <li><strong>Environmental:</strong> Shared challenges (climate change, deforestation).</li>
                    </ul>
                    <h3>Impacts</h3>
                    <p><strong>Positive:</strong></p>
                    <ul>
                        <li>Economic growth (e.g., China’s GDP rose 40x since 1980).</li>
                        <li>Cultural exchange (e.g., global cuisine, music).</li>
                        <li>Technological diffusion (e.g., internet access in 90% of countries).</li>
                    </ul>
                    <p><strong>Negative:</strong></p>
                    <ul>
                        <li>Inequality (top 1% own 50% of global wealth).</li>
                        <li>Cultural homogenization (e.g., decline of Indigenous languages).</li>
                        <li>Environmental degradation (e.g., 30% Amazon deforestation since 1970).</li>
                    </ul>
                    <h3>Trade Agreements</h3>
                    <div class="event">
                        <p><strong>CUSMA (2020):</strong> Replaced NAFTA; Canada, USA, Mexico. Promotes free trade, protects IP, but criticized for favoring corporations.</p>
                        <p><strong>WTO (1995):</strong> 164 members; reduces trade barriers. Criticized for marginalizing developing nations.</p>
                    </div>
                    <h3>Case Studies</h3>
                    <div class="event">
                        <p><strong>India’s Tech Boom:</strong></p>
                        <ul>
                            <li>Post-1991 liberalization; IT sector grew 20% annually.</li>
                            <li>Bangalore as “Silicon Valley”; employs 4M.</li>
                            <li>Challenges: Rural poverty, digital divide.</li>
                        </ul>
                    </div>
                    <div class="event">
                        <p><strong>African Resource Exploitation:</strong></p>
                        <ul>
                            <li>Foreign firms (e.g., Chinese mining) extract oil, minerals.</li>
                            <li>Benefits: Infrastructure investment.</li>
                            <li>Issues: Environmental damage, local displacement, corruption.</li>
                        </ul>
                    </div>
                    <h3>Map Analysis</h3>
                    <div class="map-placeholder">
                        <p>[Insert Map: Global Trade Routes]</p>
                        <p><strong>Summary:</strong> Likely shows major routes (e.g., Asia-Europe via Suez, Trans-Pacific). Highlights China’s Belt and Road Initiative, US dominance in Pacific trade.</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>Which regions dominate global trade? Why?</li>
                            <li>How does this reflect economic globalization?</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Trade Liberalization:</strong> Reducing trade barriers.</div>
                        <div class="glossary-item"><strong>Multinational Corporation:</strong> Operates across countries.</div>
                        <div class="glossary-item"><strong>Cultural Homogenization:</strong> Loss of cultural diversity.</div>
                    </div>
                </div>
          {/* Section 6: Human Rights */}
                          <div class="section" id="human-rights">
                    <h2>Human Rights</h2>
                    <h3>Principles</h3>
                    <p>Human rights are universal, inalienable entitlements to life, liberty, security, and dignity, rooted in liberal principles of equality and justice.</p>
                    <h3>Key Documents</h3>
                    <ul>
                        <li><strong>UN Universal Declaration of Human Rights (1948):</strong> 30 articles; rights to education, freedom from torture, fair trials.</li>
                        <li><strong>Canadian Charter of Rights and Freedoms (1982):</strong> Protects freedoms (speech, religion), equality, legal rights.</li>
                        <li><strong>Geneva Conventions (1949):</strong> Rules for wartime treatment of civilians, prisoners.</li>
                    </ul>
                    <h3>Historical Violations</h3>
                    <div class="event">
                        <p><strong>Holocaust (1933–1945):</strong></p>
                        <ul>
                            <li>Nazi genocide; 6M Jews, 5M others (Roma, disabled, homosexuals) killed.</li>
                            <li>Led to Nuremberg Trials, UN human rights framework.</li>
                        </ul>
                    </div>
                    <div class="event">
                        <p><strong>South African Apartheid (1948–1994):</strong></p>
                        <ul>
                            <li>Racial segregation; Black South Africans denied voting, land rights.</li>
                            <li>Ended via global sanctions, Nelson Mandela’s leadership.</li>
                        </ul>
                    </div>
                    <div class="event">
                        <p><strong>Rwandan Genocide (1994):</strong></p>
                        <ul>
                            <li>800,000 Tutsis killed by Hutus in 100 days.</li>
                            <li>UN’s inaction criticized; led to International Criminal Court (ICC).</li>
                        </ul>
                    </div>
                    <h3>Contemporary Issues</h3>
                    <ul>
                        <li><strong>Refugee Crises:</strong> 26M refugees (2023); Syria, Ukraine conflicts drive displacement.</li>
                        <li><strong>Gender Equality:</strong> Global gender pay gap (20%); violence against women persists.</li>
                        <li><strong>Climate Justice:</strong> Small island nations face existential threats; demand reparations from polluters.</li>
                    </ul>
                    <h3>Canadian Context</h3>
                    <p><strong>Milestones:</strong></p>
                    <ul>
                        <li><strong>Japanese-Canadian Internment (1942):</strong> 22,000 relocated; 1988 apology, reparations.</li>
                        <li><strong>Same-Sex Marriage (2005):</strong> Canada legalized nationwide, advancing equality.</li>
                        <li><strong>Truth and Reconciliation Commission (2015):</strong> Addressed residential schools; 94 Calls to Action.</li>
                    </ul>
                    <p><strong>Challenges:</strong></p>
                    <ul>
                        <li>Indigenous rights: Missing and Murdered Indigenous Women (2,000+ cases), land disputes.</li>
                        <li>Racial discrimination: Black Canadians face higher incarceration rates (7% of prison population vs. 3% of population).</li>
                    </ul>
                    <h3>International Frameworks</h3>
                    <ul>
                        <li><strong>International Criminal Court (2002):</strong> Prosecutes war crimes, genocide.</li>
                        <li><strong>Amnesty International:</strong> Monitors abuses, advocates for prisoners of conscience.</li>
                    </ul>
                    <h3>Primary Source: UN Declaration</h3>
                    <div class="source">
                        <p><strong>Excerpt, Article 1 (1948):</strong></p>
                        <p class="source-excerpt">“All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.”</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>How does this reflect liberal principles?</li>
                            <li>Why might some nations resist this declaration?</li>
                        </ul>
                    </div>
                    <h3>Data Analysis: Social Assistance</h3>
                    <div class="graph-placeholder">
                        <img src="./assets/social-assistance-graph.png" alt="Social Assistance Rates for Refugee Claimants" class="img-fluid"></img>
                        <p><strong>Summary:</strong> This line graph tracks the percentage of refugee claimants in Canada receiving social assistance over four years since their claim, by cohort (1999, 2001, 2003, 2005, 2007). Initially, around 70% rely on assistance, declining to 20–30% by year four, with newer cohorts (e.g., 2007) showing a steeper drop. This reflects integration challenges and policy shifts.</p>
                        <p><strong>Analysis Questions:</strong></p>
                        <ul>
                            <li>What trends can you identify in social assistance dependency across the cohorts?</li>
                            <li>How might this data relate to human rights issues, such as access to economic security for refugees?</li>
                            <li>Why might newer cohorts show a faster decline in assistance rates? Consider policy or economic factors.</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Inalienable:</strong> Rights that cannot be taken away.</div>
                        <div class="glossary-item"><strong>Genocide:</strong> Deliberate extermination of a group.</div>
                        <div class="glossary-item"><strong>Reconciliation:</strong> Restoring relations after injustice.</div>
                    </div>
                </div>
          {/* Section 7: Indigenous Perspectives */}
          <div class="section" id="indigenous">
                    <h2>Indigenous Perspectives</h2>
                    <h3>Overview</h3>
                    <p>Indigenous perspectives emphasize holistic worldviews, land stewardship, and community, often clashing with liberal individualism and capitalist resource extraction.</p>
                    <h3>Historical Context</h3>
                    <p><strong>Colonialism:</strong></p>
                    <ul>
                        <li><strong>Treaties (1700s–1900s):</strong> Numbered Treaties (1–11) in Canada promised land, education; often violated.</li>
                        <li><strong>Indian Act (1876):</strong> Controlled Indigenous lives; banned ceremonies, enforced reserves.</li>
                        <li><strong>Residential Schools (1880s–1996):</strong> 150,000+ children; cultural assimilation; 6,000+ deaths.</li>
                    </ul>
                    <h3>Contemporary Issues</h3>
                    <ul>
                        <li><strong>Land Rights:</strong> Wet’suwet’en pipeline protests (2020) highlight treaty disputes.</li>
                        <li><strong>Missing and Murdered Indigenous Women:</strong> 2019 inquiry found systemic racism in policing, justice.</li>
                        <li><strong>Economic Marginalization:</strong> 25% of Indigenous Canadians live in poverty vs. 10% non-Indigenous.</li>
                    </ul>
                    <h3>Reconciliation Efforts</h3>
                    <p><strong>Truth and Reconciliation Commission (2015):</strong></p>
                    <ul>
                        <li>94 Calls to Action: Education, health, justice reforms.</li>
                        <li>Progress: 10% implemented by 2023; slow government action criticized.</li>
                    </ul>
                    <p><strong>UN Declaration on the Rights of Indigenous Peoples (2007):</strong> Canada endorsed 2016; affirms self-determination, land rights.</p>
                    <h3>Case Study: Idle No More</h3>
                    <p><strong>Overview:</strong> 2012 movement; protested Bill C-45, which weakened environmental protections on Indigenous lands.</p>
                    <p><strong>Impact:</strong> Raised global awareness; spurred youth activism, round dances.</p>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Self-Determination:</strong> Indigenous control over governance, land.</div>
                        <div class="glossary-item"><strong>Residential Schools:</strong> Forced assimilation institutions.</div>
                        <div class="glossary-item"><strong>Treaty Rights:</strong> Legal agreements with Indigenous nations.</div>
                    </div>
                </div>
          {/* Section 8: Environmental Ideologies */}
          <div class="section" id="environment">
                    <h2>Environmental Ideologies</h2>
                    <h3>Overview</h3>
                    <p>Environmental ideologies prioritize sustainability, challenging liberal and capitalist focus on growth. They range from reformist (green liberalism) to radical (deep ecology).</p>
                    <h3>Key Perspectives</h3>
                    <ul>
                        <li><strong>Green Liberalism:</strong> Market-based solutions (e.g., carbon taxes); compatible with liberalism.</li>
                        <li><strong>Eco-Socialism:</strong> Critiques capitalism’s environmental harm; advocates collective resource management.</li>
                        <li><strong>Deep Ecology:</strong> All life has equal value; demands systemic change.</li>
                        <li><strong>Indigenous Environmentalism:</strong> Land as sacred; e.g., Standing Rock protests (2016).</li>
                    </ul>
                    <h3>Key Issues</h3>
                    <ul>
                        <li><strong>Climate Change:</strong> Global temperatures up 1.1°C since 1900; 2030 targets unmet.</li>
                        <li><strong>Deforestation:</strong> 10% of Amazon lost 1980–2020.</li>
                        <li><strong>Pollution:</strong> 8M metric tons of plastic enter oceans annually.</li>
                    </ul>
                    <h3>Case Study: Canada’s Carbon Tax</h3>
                    <p><strong>Overview:</strong> Introduced 2019; $50/ton in 2022, rising to $170 by 2030.</p>
                    <p><strong>Impact:</strong> Reduced emissions 2–3% annually; rebates offset costs for low-income households.</p>
                    <p><strong>Debate:</strong> Supports vs. critics argue it raises living costs.</p>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Sustainability:</strong> Meeting needs without harming future generations.</div>
                        <div class="glossary-item"><strong>Carbon Tax:</strong> Fee on fossil fuel emissions.</div>
                        <div class="glossary-item"><strong>Deep Ecology:</strong> Equal value for all life forms.</div>
                    </div>
                </div>
          {/* Section 9: Source Analysis */}
          <div class="section" id="source-analysis">
                    <h2>Source Analysis Skills</h2>
                    <h3>Overview</h3>
                    <p>Social Studies 30-2 exams require analyzing sources (cartoons, quotes, graphs, maps) to identify perspectives, biases, and ideological implications.</p>
                    <h3>Steps for Analysis</h3>
                    <ul>
                        <li><strong>Identify Source Type:</strong> Primary (e.g., speech) or secondary (e.g., textbook).</li>
                        <li><strong>Context:</strong> When, where, who created it? Historical background?</li>
                        <li><strong>Content:</strong> Key message, symbols, data, or arguments.</li>
                        <li><strong>Perspective:</strong> Author’s ideology (e.g., liberal, communist)? Bias?</li>
                        <li><strong>Purpose:</strong> Inform, persuade, critique?</li>
                        <li><strong>Implications:</strong> How does it reflect or challenge ideologies?</li>
                    </ul>
                    <h3>Practice: Political Cartoon</h3>
                    <div class="cartoon-placeholder">
                        <img src="./assets/taxation-cartoon.png" alt="Taxation Without Representation Cartoon" class="img-fluid"></img>
                        <p><strong>Analysis:</strong> This cartoon shows a king defending taxation without representation as cultural heritage, likely satirizing British rule during the American Revolution (circa 1770s). The colonist’s confusion highlights the liberal principle of consent of the governed, clashing with monarchical authority. The exaggerated crown and speech bubble emphasize the critique of unjust governance.</p>
                        <p><strong>Questions:</strong></p>
                        <ul>
                            <li>What symbols (e.g., crown, scroll) represent authority or resistance?</li>
                            <li>How does this reflect early liberal challenges to traditional power structures?</li>
                            <li>Is the cartoon pro-colonial or anti-monarchical? Justify your answer.</li>
                        </ul>
                    </div>
                    <div class="cartoon-placeholder">
                        <img src="./assets/industry-cartoon.png" alt="Protectors of Our Industries Cartoon" class="img-fluid"></img>
                        <p><strong>Analysis:</strong> From Puck magazine, this cartoon portrays industrialists lounging on a raft labeled with tariffs and industries, supported by laboring workers. The chains and ocean suggest exploitation under the guise of protectionism, critiquing late 19th-century American economic policies. It aligns with debates on free markets vs. government intervention, a key liberal economic theme.</p>
                        <p><strong>Questions:</strong></p>
                        <ul>
                            <li>Identify the symbols of wealth (e.g., top hats, raft) and labor (e.g., workers, chains).</li>
                            <li>Does this support or critique laissez-faire economics? Explain.</li>
                            <li>How might this relate to modern globalization debates on fair trade?</li>
                        </ul>
                    </div>
                    <h3>Practice: Quote Analysis</h3>
                    <div class="source">
                        <p><strong>Quote: Elizabeth Warren on Inequality (2019):</strong></p>
                        <p class="source-excerpt">“The top 1% own more wealth than the bottom 90%. That’s not a free market; that’s a rigged game.”</p>
                        <p><strong>Questions:</strong></p>
                        <ul>
                            <li>What liberal principle does Warren emphasize?</li>
                            <li>How does this critique classical liberalism?</li>
                        </ul>
                    </div>
                    <h3>Glossary</h3>
                    <div class="glossary">
                        <div class="glossary-item"><strong>Bias:</strong> Prejudice influencing perspective.</div>
                        <div class="glossary-item"><strong>Primary Source:</strong> Original document or artifact.</div>
                        <div class="glossary-item"><strong>Perspective:</strong> Viewpoint shaped by ideology, context.</div>
                    </div>
                </div>
                    {/* Section 10: Exam Preparation */}
          <div class="section" id="exam-prep">
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
                    <div class="glossary">
                        <div class="glossary-item"><strong>Thesis:</strong> Main argument in an essay.</div>
                        <div class="glossary-item"><strong>Counterargument:</strong> Opposing viewpoint addressed.</div>
                        <div class="glossary-item"><strong>Source Interpretation:</strong> Analyzing documents for meaning.</div>
                    </div>
                </div>
          {/* Section 1: Review Questions */}
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