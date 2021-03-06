/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
  // list images on console that match no model
  listMissingImages: false,
  // see devices.js for different vendor model maps
  vendormodels: vendormodels,
  // community prefix of the firmware images
  community_prefix: 'gluon-ffog-',
  // firmware version regex
  version_regex: '-([0-9]+.[0-9]+.[0-9]+~([0-9|a-z]+)?)[.-]',
  // relative image paths and branch
  directories: {
    // some demo sources
    './images/stable/factory/': 'stable',
    './images/stable/sysupgrade/': 'stable',
    './images/beta/factory/': 'beta',
    './images/beta/sysupgrade/': 'beta',
    './images/experimental/factory/': 'experimental',
    './images/experimental/sysupgrade/': 'experimental'
  }
};

