import * as assert from 'assert';

import {parseTitle} from "../src/titleParsing.js";



function assertHasTag(tags, property, value)
{
	let matches = tags.filter(tag => tag.property == property && tag.value == value);
	assert.equal(matches.length > 0, true, "tag missing expected property " + property + ":" + value + " " + JSON.stringify(tags,"","\t"));
}



describe('titleParsing', function () {

	it('supports format: simple name', function(){

		let {title, tags} = parseTitle("RAP BATTLE: Fizzy vs Izzy!")
		assert.equal(title, "RAP BATTLE: Fizzy vs Izzy!");
		assert.equal(tags.length, 0);
	});


	it('supports format: artist and name', function(){
		let {title, tags} = parseTitle("PSFMer - I've Kind of Grown to Like You")
		assert.equal(title, "I've Kind of Grown to Like You");
		assertHasTag(tags, "artist", "PSFMer");
		console.log(tags);
		assert.equal(tags.length, 1);
	});

	it('supports format: multiple artists and featured artists', function(){

		let {title, tags} = parseTitle("Jyc Row & Tw3Lv3 - Heroes Shall Vanquish (feat. Jenny G & Ziv Shalev)")
		assert.equal(title, "Heroes Shall Vanquish (feat. Jenny G & Ziv Shalev)");
		assertHasTag(tags, "artist", "Jyc Row");
		assertHasTag(tags, "artist", "Tw3Lv3");
		assertHasTag(tags, "featured artist", "Jenny G");
		assertHasTag(tags, "featured artist", "Ziv Shalev");
		assert.equal(tags.length, 4);
	});

	//weird ways of specifying the featured artists


	it('supports format: ft.', function () {

		let {title, tags} = parseTitle("need to go home ft. SOUND BANDIT")
		assert.equal(title, "need to go home ft. SOUND BANDIT");
		assertHasTag(tags, "featured artist", "SOUND BANDIT");
		assert.equal(tags.length, 1);
	});

	it('supports the format: Feat', function () {

		let {title, tags} = parseTitle("Thrack - Canterlot Express (Feat Jesh PK and Ocean Breeze)")
		assert.equal(title, "Canterlot Express (Feat Jesh PK and Ocean Breeze)");
		assertHasTag(tags, "artist", "Thrack");
		assertHasTag(tags, "featured artist", "Jesh PK");
		assertHasTag(tags, "featured artist", "Ocean Breeze");
		assert.equal(tags.length, 3);

	});

	it('supports the format: w/', function () {

		let {title, tags} = parseTitle("GNOMY w/ nikedunk & ashes2day")
		assert.equal(title, "GNOMY w/ nikedunk & ashes2day");
		assertHasTag(tags, "featured artist", "nikedunk");
		assertHasTag(tags, "featured artist", "ashes2day");
		assert.equal(tags.length, 2);

	});
});

/*

 [Happy Hardcore/UK Hardcore] Kajsa-Angel Eye(Acid Applejack Remix) 

 Sofia Carson - Glowin' Up (L-Train remix) 

 【ROCK COVER】 Discord (feat. Wubcake) - (The Living Tombstone // Cover by Yuugen Vinny) 
  Luna Wake Me Up [Beat Me Up Remix] 



 The Wilders - All You Need Is Your Beat (Drixale remix) 
 

 Nerath, Goddess Of Nightmares (feat. Koa)
 [Piano Ambiance] Skyshard - Morning Rain (VibePoniez: Hearth's Warming vol 2)

 */