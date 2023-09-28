import React from 'react';
import style from './styles.module.css';
import { Box, Typography, Container } from '@mui/material';
import Type from './type';
import EvolutionGraph from './EvolutionGraph';
import { PokemonStats } from './PokemonStats';
import { PokemonSearchBox } from './PokemonSearchBox';
import { PokemonMovesetList } from './PokemonMovesetList';
import { PokemonAccordion } from './PokemonAccordion';
import { PokemonAlternativeFormsList } from './PokemonAlternativeFormsList';
import { PokemonAbilities } from './PokemonAbilities';
import { PokemonGenderRatio } from './PokemonGenderRatio';
import { PokemonEggGroups } from './PokemonEggGroups';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { PokemonInfoButton } from './PokedexInfoButton';

export const PokemonPageContent = ({ pokemon, pokemonNames }) => {
  return (
    <Container>
      <Container>
        <Box display="flex" justifyContent="center" marginTop="16px">
          <PokemonSearchBox pokemonNames={pokemonNames} pokemonId={pokemon.id} />
          <PokemonInfoButton />
        </Box>
      </Container>
      <div className="container">
        <div className="row">
          <Typography variant="h2" component="h3" sx={{ paddingLeft: '16px' }}>
            {pokemon.name}
          </Typography>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-4">
            <ImageWithFallback
              alt={pokemon.name}
              src={`/img/${pokemon.imageSrc}`}
              fallbackSrc={`/img/${pokemon.forms[0].imageSrc}`}
              style={{ objectFit: 'contain', margin: '16px' }}
              width="80px"
              height="80px"
            />
          </div>
          <div className="col col-4">
            <Type type1={pokemon.type1} type2={pokemon.type2} />
          </div>
          <div className="col col-4">
            <Typography variant="h6" component="h6">
              <p className={style.flex}>Size:</p>
              {pokemon.height}m, {pokemon.weight}kg
              <br />
              <span style={{ fontSize: '0.8rem' }}>
                <i>Grass Knot: {pokemon.grassKnotPower}</i>
              </span>
            </Typography>
          </div>
        </div>
      </div>

      <Container>
        <PokemonAbilities
          abilityName1={pokemon.ability1}
          abilityName2={pokemon.ability2}
          abilityNameHidden={pokemon.abilityH}
        />
      </Container>

      <PokemonStats baseStats={pokemon.baseStats} baseStatsTotal={pokemon.baseStatsTotal} />
      <div className="container" style={{marginBottom: '16px'}}>
        <EvolutionGraph pokemonID={pokemon.id}/>
      </div>

      <Container>
        <PokemonAlternativeFormsList pokemonForms={pokemon.forms} />
      </Container>

      <Container>
        <Box display="flex" sx={{ flexDirection: { xs: 'column', sm: 'row', marginBottom: '16px' } }}>
          <PokemonEggGroups eggGroupNames={pokemon.eggGroupNames} sx={{ marginRight: '16px' }} />
          <PokemonGenderRatio genderDecimalValue={pokemon.genderDecimalValue} />
        </Box>
      </Container>

      <Container>
        <PokemonAccordion title="Moves learnt via level-up" id="levelMoveset">
          <PokemonMovesetList moveset={pokemon.learnset.level} movesetPrefix="levelup" pokemonDexId={pokemon.id} />
        </PokemonAccordion>
        <PokemonAccordion title="Moves learnt via Technical Machine" id="tmMoveset">
          <PokemonMovesetList moveset={pokemon.learnset.tm} movesetPrefix="tm" pokemonDexId={pokemon.id} />
        </PokemonAccordion>
        <PokemonAccordion title="Moves learnt via breeding" id="eggMoveset">
          <PokemonMovesetList moveset={pokemon.learnset.egg} movesetPrefix="egg" pokemonDexId={pokemon.id} />
        </PokemonAccordion>
        <PokemonAccordion title="Moves learnt via Tutor" id="eggMoveset">
          <PokemonMovesetList moveset={pokemon.learnset.tutor} movesetPrefix="tutor" pokemonDexId={pokemon.id} />
        </PokemonAccordion>
      </Container>

      <Container>
        <Box style={{marginTop: '50px', marginBottom: '10px'}}>
          <Typography variant="overline">
            <b>Credits:</b><br/>
          </Typography>
          <Typography variant="caption">
            Design based on the application by the <a href="https://github.com/Zarel/Pokemon-Showdown-Dex/graphs/contributors">Smogon Dex Team</a>, which can be found <a href="https://dex.pokemonshowdown.com/">here.</a><br/>
            Specific credits for the full Pokédex application go to Denmark, Glup and A-A-ron from Team Luminescent. Smogon Dex Team credits are as follows:<br/> Zarel, Marty-D, scheibo, KrisXV, Karthik99999, AnnikaCodes, SadisticMystic, pyuk-bot, mia-pi-git, penpexgit, asgdf and jakobw.<br/>
            This is the only section of the site where external inspiration was used.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};
