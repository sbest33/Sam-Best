# Final Project Proposal
## What is the Project?
My project is an **Effect Switching System for a Guitar Pedalboard**. Basically what this means is that I will build a device that can recall multiple configurations of effect pedal routings, where each configuration will be triggered by its own foot-switch.

So why would this be useful? Well let's say a guitarist is playing a song that has a Verse which requires a clean tone with some reverb, chorus, and long delay, but then the Chorus which comes right after it requires a heavy distorted tone, with no reverb, delay or chorus. In this situation, the guitarist needs to turn off three effect pedals, possibly switch pickups and hit the downbeat of the Chorus smoothly and while keeping good time, in the space of one beat. As you can imagine this is very hard to do, and leaves a lot of margin for error. With my device, all the effect switching could be done with one button press.

With the system I am proposing to build, it would only take one button press to turn on or off any number of effects that are in a pedalboard configuration of up to 8 pedals, and there would be 3 banks of 4 pedal configurations, with each pedal configuration within each bank to have it's own foot-switch to control it.

### Examples of similar products and projects:
Here are a few commercially available products which are more elaborate versions of what I would like to build, but have the same basic functionality:
* [Boss ES-5](https://www.sweetwater.com/store/detail/ES5--boss-es-5-effects-switching-system?mrkgadid=3303551177&mrkgcl=28&mrkgen=gpla&mrkgbflag=0&mrkgcat=guitars&&acctid=21700000001645388&dskeywordid=92700046934854961&lid=92700046934854961&ds_s_kwgid=58700005285194964&ds_s_inventory_feed_id=97700000007215323&dsproductgroupid=385156301715&product_id=ES5&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=%7bloc_phyiscal_ms%7d&creative=285729057343&targetid=pla-385156301715&campaignid=1465808371&gclid=EAIaIQobChMIg_jo6_zP6AIVSj0MCh1acQGnEAQYASABEgIPs_D_BwE&gclsrc=aw.ds)
* [Electro-Harmonix Super Switcher](https://www.sweetwater.com/store/detail/SuperSwitcher--electro-harmonix-super-switcher-programmable-effects-hub?mrkgadid=3332697220&mrkgcl=28&mrkgen=gpla&mrkgbflag=0&mrkgcat=guitars&&acctid=21700000001645388&dskeywordid=92700046937568522&lid=92700046937568522&ds_s_kwgid=58700005283385744&ds_s_inventory_feed_id=97700000007215323&dsproductgroupid=657314505535&product_id=SuperSwitcher&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=%7bloc_phyiscal_ms%7d&creative=337614398144&targetid=pla-657314505535&campaignid=1465808371&gclid=EAIaIQobChMIg_jo6_zP6AIVSj0MCh1acQGnEAQYAyABEgLTYPD_BwE&gclsrc=aw.ds)
* [Hotone Patch Kommander](https://www.zzounds.com/item--HOTTPLS10?siid=239005&gclid=EAIaIQobChMI1fKSyf3P6AIViZ6zCh0cwQtdEAQYAiABEgKdAvD_BwE)
* [TC-Helicon Switch-6](https://www.sweetwater.com/store/detail/Switch6--tc-helicon-switch-6-accessory-pedal-for-expanded-effects-control?mrkgadid=3303552361&mrkgcl=28&mrkgen=gpla&mrkgbflag=0&mrkgcat=guitars&&acctid=21700000001645388&dskeywordid=92700046934854529&lid=92700046934854529&ds_s_kwgid=58700005285194820&ds_s_inventory_feed_id=97700000007215323&dsproductgroupid=476457798200&product_id=Switch6&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=%7bloc_phyiscal_ms%7d&creative=285723452633&targetid=pla-476457798200&campaignid=1465808371&gclid=EAIaIQobChMI1fKSyf3P6AIViZ6zCh0cwQtdEAQYCSABEgLDmvD_BwE&gclsrc=aw.ds)

And here are a few projects similar to mine made by *makers* and *hackers* throughout the world:
* [Arduino Programmable 5 Pedal Switcher](https://www.instructables.com/id/arduino-programable-5-pedal-switcher/)
* [DIY 4 Loop Switcher \(made with all analog electronics\)](https://www.youtube.com/watch?v=Fd_LKoOA7sE)
* [DIY 8 Pedal Loop Switcher \(which I used to base my project on\)](https://www.youtube.com/watch?v=NYT-uuoJm2o)

## Where to start?
At first this seemed like quite an overwhelming project, but after a lot of research I am starting to feel confident that I will be able to pull it off. Thankfully my girlfriend, Rachel, is a product engineer with a lot of experience as a thinker, and has offered to help me if I am to get stuck or hit a dead end. On top of that her brother is an Electric Engineer who has served as a great resource for me to check if the things I am thinking of making are indeed possible and will, theoretically, work. Thankfully so far I have not come to any screeching halts in any of the thinking process, but I have definitely received some crucial help which will be mentioned further on in this proposal.

The first resource I used, was a Youtube video build demonstration of a very similar project that user [Paul Graham](https://www.youtube.com/channel/UCrw0n8YMvLIxB3unvbfISsw) made. I went all over the place afterwards looking for ideas, but I ended up going back to this video to use as a base for my project. He based his project off of an Arduino Mega 2560, which I will talk about more in the future, but after some research this seemed like the best method to be able to control multiple signals and to set up a system that could memorize different banks of effect configurations (I will discuss later on why I came to this conclusion).

## Understanding the analog version
I thought it would be a very good and crucial exercise for me to understand how the same kind of project can be done in analog fashion, using only electronic components, so I could then understand and appreciate how it could be recreated with the use of digital components as well. When we had previously conversed about the creation of this project, you pointed me to [this forum](https://www.harmonycentral.com/forums/topic/118660-building-an-effect-switching-system/) which was very useful in understanding the way signal can be routed in a pedalboard through electronic manipulation, especially because on this forum page I found [this page](http://www.geofex.com/article_folders/fxswitchr/fxswitchr.htm) which was crucial for me to understand an analog version of how this could be created. Understanding this analog signal flow and making sure I comprehended how it functions properly was probably the thing Rachel helped me with the most.

### Any effect path with 3 effects
I will now do my best to explain how this can be made using only analog components, and why I decided to use a digital micro-controller such as the Arduino to complete the project rather than make it all in Analog form. *(I will be using reference to the images in the page I mentioned in the above paragraph.)*

![Any signal path through three effects](https://github.com/sbest33/Sam-Best/blob/master/Week%2010/fxselex4%20copy.gif)

In the above picture, we can see signal coming in, and then multiple combinations of signal routing options before going to the output. Basically we have the option of routing the signal through any possible permutation of signal with 3 pedals (ranging from permutations that involve all three pedals on, to two pedals on, to just one, or to the situation where you would want to bypass all the pedals altogether).

Let's say for instance that we would like the signal to follow the following path: **Guitar In -> FX2 -> FX1 -> Output.** For this to be accomplished, all we would need to do would be to **set the first switch to the second position** (for signal to go to the Input of FX2), **the second switch to the fourth position** (for the signal to go to the main Output after it comes from the Output of FX1), **the third switch would remain on the first position** (to carry the signal into the Input of FX1), and **the fourth switch would not matter** because this pedal configuration would not include FX3.

If you come up with any configuration using any amount of those pedals, by using four SP4T (Single Pole Quadruple Throw, more on that [here](https://www.dummies.com/programming/electronics/components/switches-in-electronic-circuits-poles-and-throws/)) switches such as the ones in this circuit, it can be achieved.

### Two paths through three effects
So what was demonstrated in the above circuit would allow any combination of pedal routing to be created with 3 pedals, but let's say now we want to have a second configuration of pedals. This is what it would look like.
![Two signal paths through three effects](https://github.com/sbest33/Sam-Best/blob/master/Week%2010/fxselex5%20copy.gif)

Now we have two *"programs"*, each being controlled through a 4PST (Quadruple Pole Single Throw) switch, one (switch) marked P1 (P1A-D represents each Pole of the P1 Switch) and the other P2 (P2A-D represents each Pole of the P2 Switch). When P1 is closed (turned On), signal can run to all four of the SP4T switches in *"program" 1*, and when P2 is closed, signal can run to all four of the SP4T switches in *"program" 2*. Basically what we have now are two circuits the same as in the first image, running in parallel, each with their own pedal configuration. So let's we could set *"Program"* 1, to have the following signal flow: **Guitar In -> FX2 -> FX3 -> FX1 -> Output**; and *"Program"* 2 could have this signal flow: **Guitar In -> FX3 -> Output**.

The really nice thing about this model is that you could now just keep adding more *"programs"*, by repeating another parallel instance of the original circuit. **The problem is that there are two main issues:**
1. There is nothing that makes the *"Program 2"* turn off when *"Program"* 1 is on or vice versa, so if both of the foot-switches were closed at the same time, there would be some weird signal artifacts, like a possible feedback loop, **and as this will be used for practical performance purposes, this is enough reason to find a different method.**
2. To change the routing configuration within each *"Program"*, you need to physically open up the device and individually configure each switch in the circuit to the correct switch position.

## Making a Digital Version of the same System
So at this point I knew that the analog version would  not be flawless enough to be used in a real performance situation (and not to mention it does not require any real programming), so I had to figure out a way to be able to make it digitally. Fortunately in the past, as a young teenager, I had spent some time playing with the Arduino and also learning about Electronics, with the goal of wanting to build some effect pedals (and thankfully I was fortunate enough to eventually actually make some). One of the components I remember learning about was the Relay, which is a device that can receive a signal, and through a magnetic transducer (well usually a magnetic transducer, the ones I ended up using were actually controlled through Optical Isolation), a second circuit, usually of much higher current, can be triggered to allow signal to flow through it. So if you send a signal with low current (like 20 mA) to a Relay it can allow a much higher flow of current to be engaged, such as the current that would be flowing in and out of a guitar pedal. So basically one Relay would be able to control one effect, so 8 Relays would be able to control 8 Pedals.

So these two elements, the Arduino and the Relay, which I had a basic understanding of, were the two fundamental parts in the Effect Switching System that Rick Graham (mentioned earlier) built. Therefore I thought it would be best to design my project based on his. His creation, just like I am planning for mine to have, has 6 foot-switches 5 of them to be used to swap between *"programs"* and then one to swap between banks.

### Writing/Testing the Code
So the first thing he did was create a simpler version of his circuit where instead of controlling the current to flow/not flow to each pedal there would be an LED in place of each relay. (In the full build he ends up also using an LED to indicate which *"Program"* is turned On at a given time, and what pedal is turned On within each *"Program"*, and also to show what Bank is selected).

This is the code he uses to test the code with LED's (this is an updated version of the code by *Youtube* user *MassaM SDC*, but it only has two Banks of *"programs"* and 6 Effect Pedals, and can be found [here](http://www.mediafire.com/file/uvwpc40d8u60fhd/looper8ch_new.rar)):
```cpp
/*

  Author:
  MassaM
  March-2017

  Project:
  Arduino Uno - Guitar Pedals Looper
  Has 2 swtichable Banks of each 6 Patches (Pre-Programmed as in Hard Coded)

*/

// constants won't change. They're used here to
// set pin numbers:

const int bankin1 = 1; //input for bank input

const int button1 = 2; // button 1 input pin
const int button2 = 3; // button 2 input pin
const int button3 = 4; // button 3 input pin
const int button4 = 5; // button 4 input pin

const int loop1 = 6; //  loop 1 output pin
const int loop2 = 7; //  loop 2 output pin
const int loop3 = 8; //  loop 3 output pin
const int loop4 = 9; //  loop 4 output pin
const int loop5 = 10; // loop 5 output pin
const int loop6 = 11; // loop 6 output pin

const int bank1 = 12; // bank1 output pin
const int bank2 = 13; // bank2 output pin


// variables will change:
int buttonState1 = 0; // variable for reading button1 status
int buttonState2 = 0; // variable for reading button2 status
int buttonState3 = 0; // variable for reading button3 status
int buttonState4 = 0; // variable for reading button4 status  

int bankread1 = 0;  // variable for reading Bank Select status
int bank1State = 0;
int bank2State = 0;

long lastDebounce = 0;
long debounceDelay = 100;

void setup() {

  // initialize the Loop pins as an outputs:
  pinMode(loop1, OUTPUT);
  pinMode(loop2, OUTPUT);
  pinMode(loop3, OUTPUT);
  pinMode(loop4, OUTPUT);
  pinMode(loop5, OUTPUT);
  pinMode(loop6, OUTPUT);
  pinMode(bank1, OUTPUT);
  pinMode(bank2, OUTPUT);

  // initialize the button pins as an inputs:
  pinMode(button1, INPUT);
  pinMode(button2, INPUT);
  pinMode(button3, INPUT);
  pinMode(button4, INPUT);

  pinMode(bankin1, INPUT);

  digitalWrite(bank1, HIGH); // Default Bank1 selected on startup

} // Setup end

void loop() {

/* BANK SELECTION TOGGLE */

//one button bank switching with delay for debouncing

  bankread1 = digitalRead(bankin1);
  bank1State = digitalRead(bank1);

  if ((bankread1 == HIGH) && (bank1State == LOW)){

  //turn led8 on
    digitalWrite(bank2, LOW);
    delay(100);
    digitalWrite(bank1, HIGH);
    delay(100);

  }else if((bankread1 == HIGH) && (bank1State == HIGH)){

  //turn led7 on
    digitalWrite(bank1, LOW);
    delay(100);
    digitalWrite(bank2, HIGH);
    delay(100);

  }


  /* BANK 1 PATCHES SELECTION  */

  // bank one programming PATCHES

  // Bank 1 - Button 1 stuff
  buttonState1 = digitalRead(button1);

  if ((buttonState1 == HIGH) && (bank1State == HIGH)){
  // turn LEDs on and off:
    digitalWrite(loop1, HIGH);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop2, LOW);
    digitalWrite(loop4, LOW);
    digitalWrite(loop6, LOW);
  }

  // Bank 1 - Button 2 stuff
  buttonState2 = digitalRead(button2);

  // turn LEDs on and off:
  if ((buttonState2 == HIGH) && (bank1State == HIGH)) {
    digitalWrite(loop1, LOW);
    digitalWrite(loop3, LOW);
    digitalWrite(loop5, LOW);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop6, HIGH);
  }

  // Bank 1 - Button 3 stuff
  buttonState3 = digitalRead(button3);

  // turn LEDs on and off:
  if ((buttonState3 == HIGH) && (bank1State == HIGH)) {
    digitalWrite(loop1, HIGH);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop3, LOW);
    digitalWrite(loop4, LOW);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop6, HIGH);
  }

  // Bank 1 - Button 4 stuff
  buttonState4 = digitalRead(button4);

  // turn LEDs on and off:
  if ((buttonState4 == HIGH) && (bank1State == HIGH)) {
    digitalWrite(loop1, LOW);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop4, LOW);
    digitalWrite(loop5, LOW);
    digitalWrite(loop6, LOW);
  }

  /* BANK 2 PATCHES SELECTION  */

  //bank two programming PATCHES

  // Bank 2 - Button 1 stuff
  buttonState1 = digitalRead(button1);

  // turn LEDs on and off:
  if ((buttonState1 == HIGH) && (bank1State == LOW)){
    digitalWrite(loop1, LOW);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop2, LOW);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop6, LOW);
  }

  // Bank 2 - Button 2 stuff
  buttonState2 = digitalRead(button2);

  // turn LEDs on and off:
  if ((buttonState2 == HIGH) && (bank1State == LOW)){
    digitalWrite(loop1, HIGH);
    digitalWrite(loop3, LOW);
    digitalWrite(loop5, LOW);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop6, LOW);
  }

  // Bank 2 - Button 3 stuff
  buttonState3 = digitalRead(button3);

  // turn LEDs on and off:
  if ((buttonState3 == HIGH) && (bank1State == LOW)) {
    digitalWrite(loop1, HIGH);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop6, HIGH);
  }

  // Bank 2 - Button 4 stuff
  buttonState4 = digitalRead(button4);

  // turn LEDs on and off:
  if ((buttonState4 == HIGH) && (bank1State == LOW)) {
    digitalWrite(loop1, HIGH);
    digitalWrite(loop2, LOW);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop4, LOW);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop6, LOW);
  }

} // LOOP end﻿
```

To fully understand everything that is going on in this code, and to further my knowledge in Arduino, I have been following these tutorials [here.](https://www.youtube.com/playlist?list=PLGs0VKk2DiYx6CMdOQR_hmJ2NbB4mZQn-)

So now that I had this code which is enough to demo the signal flow and all the *"thinking"* that the Arduino is doing, I started to make a wiring diagram for what the actual program might look like, using the software [***Fritzing***](https://fritzing.org/home/). This is what my current diagram looks like (keep in mind that I have never used this program before so the organization is pretty messy, but I hope to clean it up and make it look much nicer as the project comes along).
![First Wiring Diagram](https://github.com/sbest33/Sam-Best/blob/master/Week%2010/First%20Wiring%20Diagram.png).

With this diagram, and with the code I have in mind, my project will have 5 Program Buttons (1 of them is for the tuner) and 1 Button to toggle between *"Program"* Banks. It will also have 1 LED per effect pedal (7 not including the Tuner), 1 LED for the Tuner, 4 LEDs for the 4 *"Programs"* (only one will remain lit at a time out of the four), and a LED Display to show which Bank is currently being used. Each Relay will control its own effect by going to an input jack (for my device it is really an Output, but it is an Input for the Pedal that it is going to) and then back in through an output jack (which on my device is really an Input, but it is an Output to the Pedal that it is coming from). If you noticed that the Input and Output jack for each pedal are connected, that is because they are normalled like in a patch-bay, so that there is still signal flow even when there is no pedal plugged in one of the Audio jacks (this could also be very good in case on of the pedals comes unplugged during a performance, that an effect might drop out of the signal chain, but audio signal will still be present, which could be very good for saving a performance).

#### External help for Wiring Diagram
These are some resources that helped me understand how to properly connect all these components to each other and to the Arduino:
* [For connecting Pushbuttons \(which will act as footswitches\)](https://www.youtube.com/watch?v=VPGRqML_v0w);
* [For connecting LED's](https://www.youtube.com/watch?v=e1FVSpkw6q4&t=71s);
* [For connecting the LED display](https://www.youtube.com/watch?v=yWwvUUZ4-Xs);
* [For connecting Relays](https://www.youtube.com/watch?v=LLFQ8sBWc80);
* I have a decent experience using 1/4 Audio Jacks so I did not need any kind of external resource to know how to properly add that element to the circuit.

## Which components do I need?
I have run up and down this list multiple times, so I am pretty positive this is everything I need for this build, but there might be something missing which I will probably one find out once I start building (because that is usually just how it goes, unfortunately). However, here is the list:

1. [Arduino MEGA 2560](https://store.arduino.cc/usa/mega-2560-r3)(the only reason I need this one specifically, is because of the amount of Current I will be driving from the Board as well as the amount of Pins I need. Each Pin of the Arduino can comfortably send 20mA which is enough for the Relays I have);
2. [8-Channel Relay Module](https://www.sainsmart.com/products/8-channel-5v-relay-module)(I made sure that these Relays were **Active Low**, and that the current they need to be activated be a current that the Arduino can supply, which it is (20mA). These details were ones that Rachel's brother was made sure I checked);
3. [6 Pushbutton Switches](https://www.mouser.com/ProductDetail/e-switch/fs5700spmt2b2m1qeh/?qs=1mbolxNpo8flOfvtpIEElg%3D%3D&countrycode=US&currencycode=USD)(I checked that these are SPDT switches (even though I only need SPST but that should not be an issue) that are momentary, because once the button does not need to remain down as their signal will be read and interpreted digitally);
4. [18 Mono \(TS\) Audio Jacks](https://www.mouser.com/ProductDetail/neutrik/nmj4hcd2/?qs=SzdD80gJ2cAr9Xh3wJi7nw%3D%3D&countrycode=US&currencycode=USD)(1 for Input, 1 for Output, and 2 for each Effect Pedal);
5. [Hammond 1590DF Enclosure](https://www.mouser.com/ProductDetail/hammond/1590df/?qs=QE4fThmkWqsysh4pv9rIBw%3D%3D&countrycode=US&currencycode=USD);
6. [12 5mm LED's](https://www.adafruit.com/product/299)(These need 20mA to light well, so according to Ohm's Law, they should need 250 Ohm Resistors with the Arduino's 5V Voltage, but I am using 220 Ohm's because that is a more common value for resistors and it is close enough);
7. [13 250 Ohm Resistors](https://www.adafruit.com/product/2780)(one extra for the 7 Segment LED Display);
8. [6 2.2K Ohm Pull Down Resistors for the Foot-switches](https://www.adafruit.com/product/2782);
9. [7 Segment LED Display](https://www.digikey.com/product-detail/en/broadcom-limited/HDSM-431W/516-3013-2-ND/2218995).
10. [USB charger like this one](https://www.adafruit.com/product/501) to power the Relay.

## What is Still Left to Figure Out?
Well, basically all of the planning is complete, now I just need to actually build it. There are three details I am going to have to figure out as I am still a little shaky on understanding them, but hopefully with more research and help from Rachel and her brother I will understand more thoroughly. Those three details are:

1. **Getting the right amount of power to my Relay Module.** My understanding from the help Rachel's brother offered me is that it takes 400 mA to fully power my Relay module, and that can be accomplished from a USB charger like the one listed above by folding back or cutting the green and white wires, and using the Red wire for 5V and the black one for Ground.
2. **Programming the 7 Segment LED  Display** I have never used a 7 Segment LED Display, but from what I have been reading it is pretty straight forward, but it will definitely take some time to figure it out. [This](https://www.youtube.com/watch?v=yWwvUUZ4-Xs&t=1s) seems like a great resource to get me started though.
3. **Making the Code more Efficient** In the code above, there is a lot of code that is inefficiently repeated, like basically just a copy and paste situation but with different values used to indicate the pedal configuration within each *"program"*, and to indicate each *"program"* within each Bank, so I want to try to use ***Classes*** and ***Constructers*** like in [this](https://learn.adafruit.com/multi-tasking-the-arduino-part-1/a-classy-solution) code which is super efficient. In this example (which is about making multiple LED's flash independently at any rate desired), it only takes 2 more lines of code to add an additional LED to the program. So based off that amount of efficiency, I wonder if I can make my code in a way that it will only take a few extra lines of code to add an additional bank of *"programs"* and different configurations within each *"program"*.

### The Downside of Digital vs Analog for this design
One of the best advantages of the Analog model, is that signal can flow from one pedal to the next in any order, where is in my current Digital model, any number of pedals can be on at a time, but their order can not be changed. However this is realistically not such an issue, because in my current situation (using a Pedalboard without an Effect Switching System), I am certainly not switching the order of my effect pedals between the Verse and the Chorus of a song, and there is are also certain pedal signal flows which just work better than others. But even considering that, hopefully later on in the future I can find a way to manipulate the order of the pedals in a Digital model as well.

## The Project Timeline
* April 6th - Project Proposal due;
* April 13th - Code Written to Make LED version of Circuit work;
* April 20th - Fully Written Code and testing it outside of the Enclosure;
* April 27th - Drilling, Installing and Soldering (maybe also painting box if I think of a cool design), which will be the completion of the project;
* May 4th - One week of wiggle room for troubleshooting in case any of the above steps gets delayed.

## How Should I be Graded?
I think a fair basis for my grade is:
* Was I able to get the project to function properly, with a real pedalboard and to have it set up in a way that can be used in a real world situation?
* Was I able to figure out the three issues that I presented?
* How was the overall presentation?
* How informative and thorough was my Project Proposal?
