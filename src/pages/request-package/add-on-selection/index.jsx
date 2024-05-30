// components/RequestPackage/AddOnSelection.js
import React from 'react';
import text from '../../../config/text.json';


const AddOnSelection = ({ formData, handleCooler, handleCoolerAmount, handleChair, handleChairAmount, handleTable, handleTableAmount, handleTent, handleTentAmount, handleCocktailTable, handleCocktailTableAmount, handleSideTent, handleSideTentAmount }) => {
  return (
    <div>
      <div>Select your add-ons:</div>
      <div className="add_on_container">
        <div className="add_on_option">
          <div
            className={`generic-box add_on_box ${formData.include_cooler ? 'selected-orange' : ''}`}
            onClick={handleCooler}
          >
            {text.packages.add_ons.cooler.name} - ${text.packages.add_ons.cooler.price}{text.packages.form.per_game}
          </div>
          {formData.include_cooler && (
            <div className="countbox">
              <input
                id={`${text.packages.add_ons.cooler.id}_amount`}
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={formData.cooler_amount}
                onChange={handleCoolerAmount}
              />
            </div>
          )}
        </div>
        <div className="add_on_option">
          <div
            className={`generic-box add_on_box ${formData.include_chair ? 'selected-orange' : ''}`}
            onClick={handleChair}
          >
            {text.packages.add_ons.chair.name} - ${text.packages.add_ons.chair.price}{text.packages.form.per_game}
          </div>
          {formData.include_chair && (
            <div className="countbox">
              <input
                id={`${text.packages.add_ons.chair.id}_amount`}
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={formData.chair_amount}
                onChange={handleChairAmount}
              />
            </div>
          )}
        </div>
        <div className="add_on_option">
          <div
            className={`cub-box add_on_box ${formData.include_table ? 'selected-orange' : ''}`}
            onClick={handleTable}
          >
            {text.packages.add_ons.table.name} - ${text.packages.add_ons.table.price}{text.packages.form.per_game}
          </div>
          {formData.include_table && (
            <div className="countbox">
              <input
                id={`${text.packages.add_ons.table.id}_amount`}
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={formData.table_amount}
                onChange={handleTableAmount}
              />
            </div>
          )}
        </div>
        <div className="add_on_option">
          <div
            className={`cub-box add_on_box ${formData.include_tent ? 'selected-orange' : ''}`}
            onClick={handleTent}
          >
            {text.packages.add_ons.tent.name} - ${text.packages.add_ons.tent.price}{text.packages.form.per_game}
          </div>
          {formData.include_tent && (
            <div className="countbox">
              <input
                id={`${text.packages.add_ons.tent.id}_amount`}
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={formData.tent_amount}
                onChange={handleTentAmount}
              />
            </div>
          )}
        </div>
        <div className="add_on_option">
          <div
            className={`cub-box add_on_box ${formData.include_cocktail_table ? 'selected-orange' : ''}`}
            onClick={handleCocktailTable}
          >
            {text.packages.add_ons.cocktail_table.name} - ${text.packages.add_ons.cocktail_table.price}{text.packages.form.per_game}
          </div>
          {formData.include_cocktail_table && (
            <div className="countbox">
              <input
                id={`${text.packages.add_ons.cocktail_table.id}_amount`}
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={formData.cocktail_table_amount}
                onChange={handleCocktailTableAmount}
              />
            </div>
          )}
        </div>
        <div className="add_on_option">
          <div
            className={`cub-box add_on_box ${formData.include_side_tent ? 'selected-orange' : ''}`}
            onClick={handleSideTent}
          >
            {text.packages.add_ons.side_tent.name} - ${text.packages.add_ons.side_tent.price}{text.packages.form.per_game}
          </div>
          {formData.include_side_tent && (
            <div className="countbox">
              <input
                id={`${text.packages.add_ons.side_tent.id}_amount`}
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={formData.side_tent_amount}
                onChange={handleSideTentAmount}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddOnSelection;