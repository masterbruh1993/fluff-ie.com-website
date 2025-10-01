// FLUFFIE Boot sequence messages
const bootMessages = [
    "[ 0.001] init: FLUFFIE OS bootloader starting…",
    "[ 0.010] cpu: 1 fluff-core online",
    "[ 0.018] mem: 512MB cuteness cache mapped",
    "[ 0.026] pci: probing meme-interfaces… ok",
    "[ 0.034] rtc: synced (moon epoch)",
    "[ 0.050] crypto: initializing $FLUFFIE protocol",
    "[ 0.120] fs: mounting /moon (rw, bullish)",
    "[ 0.131] fs: mounting /community (ro, diamond-hands)",
    "[INFO] loading fluffie personality modules…",
    "[ 0.166] dev: /dev/fluff0 online",
    "[ 0.177] sec: sandboxing rugpull protection… ok",
    "[ 0.20] module: load@memes → ok",
    "[ 0.21] module: load@tokenomics → ok",
    "[ 0.22] module: load@community → ok",
    "[ 0.23] module: load@roadmap → ok",
    "[ 0.24] module: load@charts → ok",
    "[ 0.25] module: load@games → ok",
    "[ 0.310] ai: loading personality → Cute & Bullish",
    "[ 0.324] ai: meme-generator=active, fluff=maximum",
    "[ 0.337] blockchain: connecting to network…",
    "[SUCCESS] FLUFFIE OS ready! Welcome to the moon! 🚀",
    "",
    "Loading main interface..."
];

let currentMessageIndex = 0;
let currentCharIndex = 0;
let isTyping = false;
let currentSection = 'main';
let currentGame = null;

// Game state variables
let fluffieBalance = 0;
let highScores = {
    cryptoClicker: 0,
    fluffRunner: 0,
    moonJump: 0,
    memeMemory: 0
};

const bootSequenceElement = document.getElementById('boot-sequence');
const mainInterfaceElement = document.getElementById('main-interface');
const contentSectionElement = document.getElementById('content-section');
const contentDisplayElement = document.getElementById('content-display');

// Content for different sections
const sectionContent = {
    '1': {
        title: 'ABOUT FLUFFIE',
        content: `
☁ FLUFFIE is the fluffiest meme coin to ever touch the Solana blockchain!

Born from the depths of internet culture and turbocharged by degen energy,
FLUFFIE is the perfect hybrid of cuteness, comedy, and cutting-edge Solana speed.

🌟 Key Features:
   • 100% Community-driven & powered by memes
   • Comedic Tokenomics engineered for maximum laughs
   • Lightning-fast Solana transactions ⚡
   • NFT + Meme integration
   • Maximum fluffiness guaranteed 🐼

Join our fluffy rebellion and let's take over the meme economy together! 🚀

Contract Address: (update later) (Verified ✓)
Network: Solana Mainnet
        `
    },
    '2': {
        title: 'TOKENOMICS',
        content: `
> Total Supply: 1,000,000,000 FLUFFIE
> Chain: Solana Mainnet ⚡
> Launch Method: PumpFun (Bonding Curve) 🚀

[ Distribution Protocol ]
- 100% starts on bonding curve (PumpFun system auto-handled)
- Dev & Marketing wallets fueled manually from initial buys
- Community supply unlocked fairly → no presale, no VC, no rugs

[ Burn Protocol ]
- Every fluff counts → manual burn events 🔥
- Scarcity mechanics activated post-curve
- Meme-driven deflationary supply model

[ Holder Uplinks ]
- Buy → Hold → Meme → Profit cycle
- Community-chosen "Fluff Purge" burn events
- Future utilities integrated (NFT drops, staking, governance)

:: Status: Fair Launch, Maximum Chaos Enabled ✅
        `
    },
    '3': {
        title: 'ROADMAP',
        content: `
PHASE 1: [BOOT SEQUENCE] ✅
- Deploy FLUFFIE via PumpFun bonding curve
- Initial DEX visibility (Raydium + DexScreener auto-list)
- MemeOps unit activated (X/TG community build-up)
- Terminal-style website online

PHASE 2: [GROWTH.exe] ⏳
- Viral meme campaigns (organic + shill squads)
- Strategic stealth buys & volume loops
- Partnership collabs with other Solana meme tribes
- FLUFFIE NFT teaser drop

PHASE 3: [UPGRADE SYSTEM] ⏳
- CEX listing application batch (target: Tier 2 first)
- Meme-utility integrations (stickers, bots, mini-games)
- Charity wallet first donation event
- FLUFFIE community governance polls

PHASE 4: [MOON PROTOCOL] ⏳
- Major exchange negotiations
- Ecosystem expansion (NFTs + staking module)
- Global meme takeover campaign 🌐
- Establish FLUFFIE as "The Cutest Terminal on Solana"

Status:
[✅] Completed | [⏳] In Progress | [⚡] Planned
        `
    },
    '4': {
        title: 'BUY $FLUFFIE',
        content: `
⚡ How to Buy $FLUFFIE on Solana:

1. Get a Solana Wallet
   └ Phantom, Solflare, or Backpack (browser or mobile app)

2. Fund Your Wallet
   └ Buy SOL on Binance, Coinbase, or Bybit
   └ Withdraw SOL to your Solana wallet address

3. Go to the DEX
   └ Raydium: https://raydium.io/swap
   └ Jupiter: https://jup.ag

4. Swap SOL → $FLUFFIE
   └ Paste contract address: [YOUR_MINT_ADDRESS]
   └ Set slippage: 0.5% – 1%

🛡 Pro Tips:
   • Always double-check the contract address
   • Start small before ape-in
   • Watch gas/fees (Solana fees = near zero ✅)
   • Join Telegram for live updates

⚠ DYOR: Do Your Own Research
This is not financial advice. Crypto investments carry risks.

Quick Links:
[1] Raydium   [2] Jupiter   [3] DexScreener   [4] Solscan
        `
    },

    '5': {
        title: 'CONTRACT INFO',
        content: `
📜 CONTRACT INFO


🔑 Basic Contract Details
   - Token Name: Fluffie
   - Symbol: $FLUFFIE
   - Contract Address: [PLACEHOLDER_CA] [COPY BUTTON]
   - Network: Solana Mainnet (SPL Token)
   - Decimals: 9
   - Launchpad: PumpFun (Bonding Curve → auto migrate to Raydium)
   - Total Supply: 1,000,000,000 $FLUFFIE


🔒 Security Features
   - ✅ Ownership Renounced after bonding curve
   - ✅ Liquidity Auto-Locked on Raydium (post-curve)
   - ✅ No Mint Function
   - ✅ No Hidden Freeze/Blacklist
   - ✅ Fair Launch: No presale, no VC, no private seed
   - ✅ Anti-Whale: Max 2% per transaction



⚙️ Token Functions
   - 🔥 Burn Protocol: 2% per TX permanently burned
   - 🎁 Holder Perks: Meme NFT airdrops + staking access
   - ♻️ Community Staking
   - ⚡ Lightning-fast Solana transactions
   - 🌍 Future utilities: Cross-chain bridge + governance



🔍 Verification & Transparency
   - ✅ Contract Verified on Solscan
   - ✅ Pair Verified on DexScreener
   - ✅ Liquidity Locked:
   - 📊 Audit Status: Pending / RugDoc
        `
    },

    '6': {
        title: 'MINI GAMES',
        content: `
🎮 Choose your game:

[1] 🖱️  Crypto Clicker - Click to earn $FLUFFIE!
[2] 🏃 Fluff Runner - Endless running adventure
[3] 🚀 Moon Jump - Jump to the moon!
[4] 🧠 Meme Memory - Match the FLUFFIE memes

💰 Your $FLUFFIE Balance: 0 FLUFF

🏆 High Scores:
   • Crypto Clicker: 0 clicks
   • Fluff Runner: 0 meters
   • Moon Jump: 0 points
   • Meme Memory: 0 matches

Press 1-4 to play a game or ESC to return to main menu.
        `,
        isGame: true
    }
};

function typeMessage() {
    if (currentMessageIndex >= bootMessages.length) {
        // Boot sequence complete, show main interface
        setTimeout(() => {
            bootSequenceElement.style.display = 'none';
            mainInterfaceElement.style.display = 'block';
            initializeInterface();
        }, 1000);
        return;
    }

    const currentMessage = bootMessages[currentMessageIndex];
    
    if (currentCharIndex < currentMessage.length) {
        // Type character by character
        const messageElement = document.createElement('div');
        messageElement.className = 'boot-line';
        messageElement.textContent = currentMessage.substring(0, currentCharIndex + 1);
        
        // Remove previous incomplete line if exists
        const lastLine = bootSequenceElement.lastElementChild;
        if (lastLine && lastLine.classList.contains('boot-line') && 
            lastLine.textContent.length < currentMessage.length) {
            bootSequenceElement.removeChild(lastLine);
        }
        
        bootSequenceElement.appendChild(messageElement);
        currentCharIndex++;
        
        // Scroll to bottom
        bootSequenceElement.scrollTop = bootSequenceElement.scrollHeight;
        
        // Random typing speed for realistic effect
        const typingSpeed = Math.random() * 30 + 10;
        setTimeout(typeMessage, typingSpeed);
    } else {
        // Move to next message
        currentMessageIndex++;
        currentCharIndex = 0;
        
        // Pause between messages
        const pauseTime = Math.random() * 100 + 50;
        setTimeout(typeMessage, pauseTime);
    }
}

// Techy Lofi Audio System
class TechyLofiAudio {
    constructor() {
        this.audioContext = null;
        this.isPlaying = false;
        this.volume = 0.15; // Lower volume for lofi vibe
        this.initAudio();
    }

    async initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.createLofiMusic();
        } catch (error) {
            console.log('Audio not supported:', error);
        }
    }

    createLofiMusic() {
        // Create techy lofi background music
        const masterGain = this.audioContext.createGain();
        masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
        masterGain.connect(this.audioContext.destination);

        // Bass line - deep and warm
        const bassOsc = this.audioContext.createOscillator();
        const bassGain = this.audioContext.createGain();
        const bassFilter = this.audioContext.createBiquadFilter();
        
        bassOsc.frequency.setValueAtTime(65, this.audioContext.currentTime); // C2
        bassOsc.type = 'sawtooth';
        bassFilter.type = 'lowpass';
        bassFilter.frequency.setValueAtTime(200, this.audioContext.currentTime);
        bassFilter.Q.setValueAtTime(2, this.audioContext.currentTime);
        bassGain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        
        bassOsc.connect(bassFilter);
        bassFilter.connect(bassGain);
        bassGain.connect(masterGain);

        // Pad - atmospheric and warm
        const padOsc1 = this.audioContext.createOscillator();
        const padOsc2 = this.audioContext.createOscillator();
        const padGain = this.audioContext.createGain();
        const padFilter = this.audioContext.createBiquadFilter();
        
        padOsc1.frequency.setValueAtTime(130.81, this.audioContext.currentTime); // C3
        padOsc2.frequency.setValueAtTime(164.81, this.audioContext.currentTime); // E3
        padOsc1.type = 'triangle';
        padOsc2.type = 'triangle';
        
        padFilter.type = 'lowpass';
        padFilter.frequency.setValueAtTime(1200, this.audioContext.currentTime);
        padFilter.Q.setValueAtTime(0.5, this.audioContext.currentTime);
        padGain.gain.setValueAtTime(0.15, this.audioContext.currentTime);
        
        padOsc1.connect(padGain);
        padOsc2.connect(padGain);
        padGain.connect(padFilter);
        padFilter.connect(masterGain);

        // High frequency sparkle - subtle digital texture
        const sparkleOsc = this.audioContext.createOscillator();
        const sparkleGain = this.audioContext.createGain();
        const sparkleFilter = this.audioContext.createBiquadFilter();
        
        sparkleOsc.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
        sparkleOsc.type = 'sine';
        sparkleFilter.type = 'highpass';
        sparkleFilter.frequency.setValueAtTime(2000, this.audioContext.currentTime);
        sparkleGain.gain.setValueAtTime(0.05, this.audioContext.currentTime);
        
        sparkleOsc.connect(sparkleFilter);
        sparkleFilter.connect(sparkleGain);
        sparkleGain.connect(masterGain);

        // LFO for filter modulation - slow and dreamy
        const lfo1 = this.audioContext.createOscillator();
        const lfo1Gain = this.audioContext.createGain();
        lfo1.frequency.setValueAtTime(0.05, this.audioContext.currentTime); // Very slow
        lfo1.type = 'sine';
        lfo1Gain.gain.setValueAtTime(100, this.audioContext.currentTime);
        
        lfo1.connect(lfo1Gain);
        lfo1Gain.connect(padFilter.frequency);

        // LFO for bass modulation
        const lfo2 = this.audioContext.createOscillator();
        const lfo2Gain = this.audioContext.createGain();
        lfo2.frequency.setValueAtTime(0.08, this.audioContext.currentTime);
        lfo2.type = 'triangle';
        lfo2Gain.gain.setValueAtTime(20, this.audioContext.currentTime);
        
        lfo2.connect(lfo2Gain);
        lfo2Gain.connect(bassFilter.frequency);

        // Subtle amplitude modulation for breathing effect
        const ampLfo = this.audioContext.createOscillator();
        const ampLfoGain = this.audioContext.createGain();
        ampLfo.frequency.setValueAtTime(0.03, this.audioContext.currentTime); // Very slow breathing
        ampLfo.type = 'sine';
        ampLfoGain.gain.setValueAtTime(0.02, this.audioContext.currentTime);
        
        ampLfo.connect(ampLfoGain);
        ampLfoGain.connect(masterGain.gain);

        this.lofiMusic = {
            oscillators: [bassOsc, padOsc1, padOsc2, sparkleOsc],
            lfos: [lfo1, lfo2, ampLfo],
            masterGain: masterGain
        };
    }

    startMusic() {
        if (this.lofiMusic && !this.isPlaying) {
            this.lofiMusic.oscillators.forEach(osc => osc.start());
            this.lofiMusic.lfos.forEach(lfo => lfo.start());
            this.isPlaying = true;
        }
    }

    // Subtle sound effects that match lofi vibe
    playClickSound() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.15);
        oscillator.type = 'triangle';
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.03, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.15);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.15);
    }

    playHoverSound() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
        oscillator.type = 'sine';
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, this.audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.02, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.08);
        
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.08);
    }
}

// Initialize audio system
let audioSystem;

function initializeInterface() {
    // Initialize techy lofi audio system
    audioSystem = new TechyLofiAudio();
    
    // Start lofi music automatically after a short delay
    setTimeout(() => {
        if (audioSystem) {
            audioSystem.startMusic();
        }
    }, 1000);
    
    // Show main menu and metrics display
    showMainMenu();
    
    // Add event listeners for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    const menuButtons = document.querySelectorAll('.menu-btn');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const key = item.getAttribute('data-key');
            showSection(key);
            if (audioSystem) audioSystem.playClickSound();
        });
        
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#003300';
            if (audioSystem) audioSystem.playHoverSound();
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (currentSection === 'main') {
            const key = e.key;
            if (key >= '1' && key <= '6') {
                showSection(key);
            }
        } else if (currentSection === 'content') {
            if (e.key === 'Escape') {
                showMainMenu();
            }
        } else if (currentSection === 'games') {
            if (e.key === 'Escape') {
                if (currentGame) {
                    stopCurrentGame();
                } else {
                     showMainInterface();
                 }
             } else if (!currentGame) {
                 // Game selection
                 if (e.key === '1') {
                     startCryptoClicker();
                 } else if (e.key === '2') {
                     startFluffRunner();
                 } else if (e.key === '3') {
                     startMoonJump();
                 } else if (e.key === '4') {
                     startMemeMemory();
                 }
             }
        }
    });
    
    // Menu button actions
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            handleMenuAction(action);
            if (audioSystem) audioSystem.playClickSound();
        });
        
        button.addEventListener('mouseenter', () => {
            if (audioSystem) audioSystem.playHoverSound();
        });
    });
}

function showSection(key) {
    const content = sectionContent[key];
    if (content) {
        currentSection = content.isGame ? 'games' : 'content';
        mainInterfaceElement.style.display = 'none';
        contentSectionElement.style.display = 'block';
        
        // Hide metrics display when navigating to other sections
        const metricsDisplay = document.getElementById('metrics-display');
        if (metricsDisplay) {
            metricsDisplay.style.display = 'none';
        }
        
        if (content.isGame) {
            // Update game content with current stats
            const updatedContent = content.content
                .replace('Your $FLUFFIE Balance: 0 FLUFF', `Your $FLUFFIE Balance: ${fluffieBalance} FLUFF`)
                .replace('Crypto Clicker: 0 clicks', `Crypto Clicker: ${highScores.cryptoClicker} clicks`)
                .replace('Fluff Runner: 0 meters', `Fluff Runner: ${highScores.fluffRunner} meters`)
                .replace('Moon Jump: 0 points', `Moon Jump: ${highScores.moonJump} points`)
                .replace('Meme Memory: 0 matches', `Meme Memory: ${highScores.memeMemory} matches`);
            
            contentDisplayElement.innerHTML = `
                <h2>${content.title}</h2>
                <pre class="content-text">${updatedContent}</pre>
                <div id="game-area" style="display: none;"></div>
            `;
        } else if (content.isHTML) {
            // Handle HTML content (for Live Chart section)
            contentDisplayElement.innerHTML = `
                <h2>${content.title}</h2>
                <div class="content-text html-content">${content.content}</div>
            `;
        } else {
            contentDisplayElement.innerHTML = `
                <h2>${content.title}</h2>
                <pre class="content-text">${content.content}</pre>
            `;
        }
    }
}

// Copy contract address function
function copyContract() {
    const contractAddress = document.getElementById('contractAddress').textContent;
    navigator.clipboard.writeText(contractAddress).then(() => {
        // Show feedback
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '[ COPIED! ]';
        copyBtn.style.color = '#ff0080';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.color = '#00ff41';
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showMainMenu() {
    currentSection = 'main';
    contentSectionElement.style.display = 'none';
    mainInterfaceElement.style.display = 'block';
    
    // Show metrics display only on main page
    const metricsDisplay = document.getElementById('metrics-display');
    if (metricsDisplay) {
        metricsDisplay.style.display = 'flex';
    }
}

function handleMenuAction(action) {
    switch(action) {
        case 'buy':
            window.open('https://dexscreener.com/solana/FzwB5RP6M6Nb5jb6EageNnsopVHh53VePGoeVPPGpump', '_blank');
            break;
        case 'telegram':
            window.open('https://t.me/FluffieToken', '_blank');
            break;
        case 'twitter':
            window.open('https://x.com/i/communities/1973332429848060028', '_blank');
            break;
    }
}

// Game Functions
function stopCurrentGame() {
    currentGame = null;
    const gameArea = document.getElementById('game-area');
    if (gameArea) {
        gameArea.style.display = 'none';
        gameArea.innerHTML = '';
    }
    showSection('6'); // Return to games menu
}

function startCryptoClicker() {
    currentGame = 'cryptoClicker';
    const gameArea = document.getElementById('game-area');
    let clicks = 0;
    let clickPower = 1;
    
    gameArea.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #001122; border: 2px solid #00ff00; margin: 20px 0;">
            <h3>🖱️ CRYPTO CLICKER</h3>
            <div style="font-size: 24px; margin: 20px 0;">
                💰 Clicks: <span id="click-count">0</span>
            </div>
            <div style="font-size: 18px; margin: 10px 0;">
                ⚡ Power: <span id="click-power">1</span> FLUFF per click
            </div>
            <button id="click-button" style="
                font-size: 48px; 
                padding: 20px 40px; 
                background: linear-gradient(45deg, #ff6b35, #f7931e);
                border: 3px solid #00ff00;
                color: white;
                cursor: pointer;
                border-radius: 10px;
                margin: 20px;
                transition: transform 0.1s;
            ">🐾 CLICK ME!</button>
            <div style="margin: 20px 0;">
                <button id="upgrade-power" style="
                    padding: 10px 20px;
                    background: #0066cc;
                    border: 2px solid #00ff00;
                    color: white;
                    cursor: pointer;
                    border-radius: 5px;
                    margin: 5px;
                ">Upgrade Power (Cost: <span id="upgrade-cost">10</span> FLUFF)</button>
            </div>
            <div style="color: #00ff00; margin: 10px 0;">
                Press ESC to return to games menu
            </div>
        </div>
    `;
    
    gameArea.style.display = 'block';
    
    const clickButton = document.getElementById('click-button');
    const clickCountElement = document.getElementById('click-count');
    const clickPowerElement = document.getElementById('click-power');
    const upgradeButton = document.getElementById('upgrade-power');
    const upgradeCostElement = document.getElementById('upgrade-cost');
    
    let upgradeCost = 10;
    
    clickButton.addEventListener('click', function() {
        clicks += clickPower;
        fluffieBalance += clickPower;
        clickCountElement.textContent = clicks;
        
        // Animation effect
        clickButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickButton.style.transform = 'scale(1)';
        }, 100);
        
        // Update high score
        if (clicks > highScores.cryptoClicker) {
            highScores.cryptoClicker = clicks;
        }
    });
    
    upgradeButton.addEventListener('click', function() {
        if (fluffieBalance >= upgradeCost) {
            fluffieBalance -= upgradeCost;
            clickPower++;
            upgradeCost = Math.floor(upgradeCost * 1.5);
            
            clickPowerElement.textContent = clickPower;
            upgradeCostElement.textContent = upgradeCost;
        }
    });
}

function startFluffRunner() {
    currentGame = 'fluffRunner';
    const gameArea = document.getElementById('game-area');
    let distance = 0;
    let isJumping = false;
    let gameRunning = true;
    
    gameArea.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #001122; border: 2px solid #00ff00; margin: 20px 0;">
            <h3>🏃 FLUFF RUNNER</h3>
            <div style="font-size: 18px; margin: 10px 0;">
                📏 Distance: <span id="distance">0</span>m
            </div>
            <div id="game-canvas" style="
                width: 400px; 
                height: 200px; 
                background: linear-gradient(to bottom, #87CEEB 0%, #98FB98 100%);
                border: 2px solid #00ff00;
                margin: 20px auto;
                position: relative;
                overflow: hidden;
            ">
                <div id="player" style="
                    width: 30px;
                    height: 30px;
                    background: #ff6b35;
                    position: absolute;
                    bottom: 20px;
                    left: 50px;
                    border-radius: 50%;
                    transition: bottom 0.3s;
                ">🐾</div>
                <div id="obstacle" style="
                    width: 20px;
                    height: 40px;
                    background: #8B4513;
                    position: absolute;
                    bottom: 20px;
                    right: -20px;
                ">🌳</div>
            </div>
            <div style="color: #00ff00; margin: 10px 0;">
                Press SPACEBAR to jump! ESC to return to games menu
            </div>
        </div>
    `;
    
    gameArea.style.display = 'block';
    
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');
    const distanceElement = document.getElementById('distance');
    
    let obstaclePosition = 400;
    
    function gameLoop() {
        if (!gameRunning || currentGame !== 'fluffRunner') return;
        
        // Move obstacle
        obstaclePosition -= 3;
        obstacle.style.right = (400 - obstaclePosition) + 'px';
        
        // Reset obstacle when it goes off screen
        if (obstaclePosition < -20) {
            obstaclePosition = 420;
            distance += 10;
            distanceElement.textContent = distance;
            fluffieBalance += 1;
        }
        
        // Check collision
        if (obstaclePosition < 80 && obstaclePosition > 30 && !isJumping) {
            gameRunning = false;
            alert(`Game Over! You ran ${distance} meters and earned ${Math.floor(distance/10)} FLUFF!`);
            if (distance > highScores.fluffRunner) {
                highScores.fluffRunner = distance;
            }
            stopCurrentGame();
            return;
        }
        
        requestAnimationFrame(gameLoop);
    }
    
    // Jump controls
    document.addEventListener('keydown', function jumpHandler(e) {
        if (e.code === 'Space' && currentGame === 'fluffRunner' && !isJumping) {
            e.preventDefault();
            isJumping = true;
            player.style.bottom = '80px';
            setTimeout(() => {
                player.style.bottom = '20px';
                setTimeout(() => {
                    isJumping = false;
                }, 300);
            }, 300);
        }
    });
    
    gameLoop();
}

function startMoonJump() {
    currentGame = 'moonJump';
    const gameArea = document.getElementById('game-area');
    
    gameArea.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #001122; border: 2px solid #00ff00; margin: 20px 0;">
            <h3>🚀 MOON JUMP</h3>
            <div style="font-size: 18px; margin: 10px 0;">
                🌙 Score: <span id="moon-score">0</span>
            </div>
            <div id="moon-canvas" style="
                width: 400px; 
                height: 300px; 
                background: linear-gradient(to bottom, #000011 0%, #000033 100%);
                border: 2px solid #00ff00;
                margin: 20px auto;
                position: relative;
                overflow: hidden;
            ">
                <div id="moon-player" style="
                    width: 25px;
                    height: 25px;
                    background: #ff6b35;
                    position: absolute;
                    bottom: 20px;
                    left: 190px;
                    border-radius: 50%;
                ">🐾</div>
            </div>
            <div style="color: #00ff00; margin: 10px 0;">
                Use ARROW KEYS to move and SPACEBAR to jump!<br>
                Collect stars ⭐ and avoid meteors ☄️<br>
                ESC to return to games menu
            </div>
        </div>
    `;
    
    gameArea.style.display = 'block';
    
    const canvas = document.getElementById('moon-canvas');
    const player = document.getElementById('moon-player');
    const scoreElement = document.getElementById('moon-score');
    
    let playerX = 190;
    let playerY = 20;
    let velocityY = 0;
    let score = 0;
    let gameRunning = true;
    let stars = [];
    let meteors = [];
    
    function createStar() {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 15px;
            height: 15px;
            top: 0px;
            left: ${Math.random() * 370}px;
            font-size: 15px;
        `;
        star.textContent = '⭐';
        canvas.appendChild(star);
        stars.push({element: star, x: parseInt(star.style.left), y: 0});
    }
    
    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            top: 0px;
            left: ${Math.random() * 360}px;
            font-size: 20px;
        `;
        meteor.textContent = '☄️';
        canvas.appendChild(meteor);
        meteors.push({element: meteor, x: parseInt(meteor.style.left), y: 0});
    }
    
    function moonGameLoop() {
        if (!gameRunning || currentGame !== 'moonJump') return;
        
        // Gravity
        velocityY -= 0.8;
        playerY += velocityY;
        
        // Ground collision
        if (playerY <= 20) {
            playerY = 20;
            velocityY = 0;
        }
        
        player.style.bottom = playerY + 'px';
        player.style.left = playerX + 'px';
        
        // Move stars and meteors
        stars.forEach((star, index) => {
            star.y += 2;
            star.element.style.top = star.y + 'px';
            
            // Check star collection
            if (Math.abs(star.x - playerX) < 20 && Math.abs(star.y - (280 - playerY)) < 20) {
                score += 10;
                fluffieBalance += 2;
                scoreElement.textContent = score;
                star.element.remove();
                stars.splice(index, 1);
            }
            
            // Remove stars that fall off screen
            if (star.y > 300) {
                star.element.remove();
                stars.splice(index, 1);
            }
        });
        
        meteors.forEach((meteor, index) => {
            meteor.y += 3;
            meteor.element.style.top = meteor.y + 'px';
            
            // Check meteor collision
            if (Math.abs(meteor.x - playerX) < 25 && Math.abs(meteor.y - (280 - playerY)) < 25) {
                gameRunning = false;
                alert(`Game Over! Final Score: ${score} points!`);
                if (score > highScores.moonJump) {
                    highScores.moonJump = score;
                }
                stopCurrentGame();
                return;
            }
            
            // Remove meteors that fall off screen
            if (meteor.y > 300) {
                meteor.element.remove();
                meteors.splice(index, 1);
            }
        });
        
        // Spawn new objects
        if (Math.random() < 0.02) createStar();
        if (Math.random() < 0.01) createMeteor();
        
        requestAnimationFrame(moonGameLoop);
    }
    
    // Controls
    const keys = {};
    document.addEventListener('keydown', function(e) {
        if (currentGame !== 'moonJump') return;
        keys[e.code] = true;
        
        if (e.code === 'Space' && playerY <= 25) {
            e.preventDefault();
            velocityY = 15;
        }
    });
    
    document.addEventListener('keyup', function(e) {
        if (currentGame !== 'moonJump') return;
        keys[e.code] = false;
    });
    
    function handleMovement() {
        if (currentGame !== 'moonJump') return;
        
        if (keys['ArrowLeft'] && playerX > 0) {
            playerX -= 3;
        }
        if (keys['ArrowRight'] && playerX < 375) {
            playerX += 3;
        }
        
        requestAnimationFrame(handleMovement);
    }
    
    handleMovement();
    moonGameLoop();
}

function startMemeMemory() {
    currentGame = 'memeMemory';
    const gameArea = document.getElementById('game-area');
    
    const memes = ['🐾', '🚀', '💎', '🌙', '⭐', '🔥', '💰', '🎮'];
    let cards = [...memes, ...memes].sort(() => Math.random() - 0.5);
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    
    gameArea.innerHTML = `
        <div style="text-align: center; padding: 20px; background: #001122; border: 2px solid #00ff00; margin: 20px 0;">
            <h3>🧠 MEME MEMORY</h3>
            <div style="font-size: 18px; margin: 10px 0;">
                🎯 Matches: <span id="matches">0</span>/8 | 🔄 Moves: <span id="moves">0</span>
            </div>
            <div id="memory-grid" style="
                display: grid;
                grid-template-columns: repeat(4, 60px);
                gap: 10px;
                justify-content: center;
                margin: 20px auto;
            "></div>
            <div style="color: #00ff00; margin: 10px 0;">
                Click cards to flip them and find matching pairs!<br>
                ESC to return to games menu
            </div>
        </div>
    `;
    
    gameArea.style.display = 'block';
    
    const grid = document.getElementById('memory-grid');
    const matchesElement = document.getElementById('matches');
    const movesElement = document.getElementById('moves');
    
    cards.forEach((meme, index) => {
        const card = document.createElement('div');
        card.style.cssText = `
            width: 60px;
            height: 60px;
            background: #333;
            border: 2px solid #00ff00;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 24px;
            border-radius: 5px;
            transition: all 0.3s;
        `;
        card.textContent = '❓';
        card.dataset.meme = meme;
        card.dataset.index = index;
        
        card.addEventListener('click', function() {
            if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
                card.textContent = meme;
                card.style.background = '#0066cc';
                card.classList.add('flipped');
                flippedCards.push(card);
                
                if (flippedCards.length === 2) {
                    moves++;
                    movesElement.textContent = moves;
                    
                    setTimeout(() => {
                        if (flippedCards[0].dataset.meme === flippedCards[1].dataset.meme) {
                            // Match found
                            flippedCards.forEach(c => {
                                c.classList.add('matched');
                                c.style.background = '#00aa00';
                            });
                            matchedPairs++;
                            matchesElement.textContent = matchedPairs;
                            fluffieBalance += 5;
                            
                            if (matchedPairs === 8) {
                                const finalScore = Math.max(100 - moves * 2, 10);
                                alert(`Congratulations! You won in ${moves} moves! Score: ${finalScore}`);
                                fluffieBalance += finalScore;
                                if (matchedPairs > highScores.memeMemory) {
                                    highScores.memeMemory = matchedPairs;
                                }
                                stopCurrentGame();
                            }
                        } else {
                            // No match
                            flippedCards.forEach(c => {
                                c.textContent = '❓';
                                c.style.background = '#333';
                                c.classList.remove('flipped');
                            });
                        }
                        flippedCards = [];
                    }, 1000);
                }
            }
        });
        
        grid.appendChild(card);
    });
}

// Matrix Rain Effect
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters (including crypto symbols)
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン$₿Ξ💎🚀🌙⭐🔥💰🐾';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to store drop positions
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }
    
    function drawMatrix() {
        // Semi-transparent black background for trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Green text
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            
            // Draw character
            ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.8 + 0.2})`;
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            // Reset drop to top randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move drop down
            drops[i]++;
        }
    }
    
    // Start matrix animation
    setInterval(drawMatrix, 50);
}

// Metrics Animation
function animateMetrics() {
    const holders = document.getElementById('holders-count');
    const marketCap = document.getElementById('market-cap');
    const trustScore = document.getElementById('trust-score');
    
    // Animate numbers with slight variations
    setInterval(() => {
        // Holders count animation (18,400 - 18,450)
        const holdersBase = 18400;
        const holdersVariation = Math.floor(Math.random() * 50);
        const newHolders = holdersBase + holdersVariation;
        holders.textContent = newHolders.toLocaleString();
        
        // Market cap animation (2.7M - 2.9M)
        const capBase = 2.7;
        const capVariation = Math.random() * 0.2;
        const newCap = (capBase + capVariation).toFixed(1);
        marketCap.textContent = newCap + 'M';
        
        // Trust score animation (96 - 99)
        const scoreBase = 96;
        const scoreVariation = Math.floor(Math.random() * 4);
        const newScore = scoreBase + scoreVariation;
        trustScore.textContent = newScore;
    }, 3000);
    
    // Add random glitch effect
    setInterval(() => {
        const metrics = [holders, marketCap, trustScore];
        const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
        
        // Glitch effect
        randomMetric.style.transform = 'scale(1.1)';
        randomMetric.style.color = '#ff0080';
        
        setTimeout(() => {
            randomMetric.style.transform = 'scale(1)';
            randomMetric.style.color = '#00ff00';
        }, 200);
    }, 8000);
}

// Live Trades functionality
const liveTrades = [
    { type: "buy", text: "Wallet 9x2.. bought 1.2 SOL of $FLUFFIE 🐟" },
    { type: "sell", text: "Wallet a7d.. sold 0.4 SOL of $FLUFFIE 🐳" },
    { type: "buy", text: "Wallet 4bd.. bought 3.1 SOL of $FLUFFIE 🦈" },
    { type: "sell", text: "Wallet 2ae.. sold 0.9 SOL of $FLUFFIE 🦀" },
    { type: "buy", text: "Wallet 1bc.. bought 5.5 SOL of $FLUFFIE 🐋" },
    { type: "sell", text: "Wallet 6wx.. sold 1.6 SOL of $FLUFFIE 🐡" },
    { type: "buy", text: "Wallet 8aa.. bought 0.8 SOL of $FLUFFIE 🦑" },
    { type: "buy", text: "Wallet 7f1.. bought 0.6 SOL of $FLUFFIE 🐢" },
    { type: "sell", text: "Wallet 3ca.. sold 1.3 SOL of $FLUFFIE 🐠" },
    { type: "buy", text: "Wallet 2lm.. bought 1.0 SOL of $FLUFFIE 🐙" },
    { type: "buy", text: "Wallet 9ab.. bought 7.8 SOL of $FLUFFIE 🐳" },
    { type: "sell", text: "Wallet 5gh.. sold 0.8 SOL of $FLUFFIE 🐟" },
    { type: "buy", text: "Wallet 3ef.. bought 4.6 SOL of $FLUFFIE 🐬" },
    { type: "sell", text: "Wallet 1kl.. sold 1.1 SOL of $FLUFFIE 🐡" },
    { type: "buy", text: "Wallet 7ij.. bought 2.2 SOL of $FLUFFIE 🦈" }
];

function shuffleTrade() {
    const trade = liveTrades[Math.floor(Math.random() * liveTrades.length)];
    const container = document.getElementById("live-trades");
    
    const newLine = document.createElement("div");
    newLine.textContent = trade.text;
    newLine.style.marginBottom = "2px";
    newLine.style.color = trade.type === "buy" ? "#00ff66" : "#ff4444";
    
    container.prepend(newLine);
    
    while (container.childElementCount > 3) {
        container.removeChild(container.lastChild);
    }
    
    newLine.style.opacity = 0;
    newLine.style.transform = "translateY(8px)";
    setTimeout(() => {
        newLine.style.transition = "all 0.25s ease";
        newLine.style.opacity = 1;
        newLine.style.transform = "translateY(0)";
    }, 50);
}

// Initialize everything when page loads
window.addEventListener('load', function() {
    initMatrixRain();
    animateMetrics();
    setTimeout(startBootSequence, 500);
    
    // Start live trades after page loads
    setTimeout(() => {
        setInterval(shuffleTrade, 1800);
    }, 2000);
});

function startBootSequence() {
    bootSequenceElement.style.display = 'block';
    typeMessage();
}

// Cursor blinking animation
setInterval(() => {
    const cursor = document.getElementById('cursor');
    if (cursor && !isTyping) {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }
}, 500);