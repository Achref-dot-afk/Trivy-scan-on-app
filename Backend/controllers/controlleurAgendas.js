const Agendas = require('../models/Agenda');

module.exports = {
    getAgendasNum : async(req,res) => {
        try {
            
            const agendaNumbers = await Agendas.findAll({
              attributes: ['numAgenda'],
              raw: true, 
            });
        
            
            const numbers = agendaNumbers.map(agenda => agenda.numAgenda);
        
           
            res.status(200).json(numbers);
          } catch (error) {
            
            console.error('Error fetching agenda numbers:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
    }
}